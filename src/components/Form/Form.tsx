import React from 'react';
import './form.css';
import Input, { InputProps } from '../Input/Input';
import { Button } from '../Button/Button';

interface FormSection {
  title: string;
  fields: InputProps[];
}

export interface FormProps {
  title?: string;
  sections?: FormSection[];
  fields?: InputProps[];  // For forms without sections
  onSubmit: (data: Record<string, any>) => void;
  submitLabel?: string;
  styleForm?: React.CSSProperties;
  styleSection?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
}

export const Form: React.FC<FormProps> = ({
  title,
  sections,
  fields,
  onSubmit,
  submitLabel = 'Submit',
  styleForm,
  styleSection,

}) => {
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  // Render a single section
  const renderSection = (title: string, fields: InputProps[]) => (
    <section key={title} className="form-group" style={styleSection}>
      <h3>{title}</h3>
      {fields.map((field, index) => (
        <Input
          key={`${title}-${index}`}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          required={field.required}
          options={field.options}
          error={field.error}
          disabled={field.disabled}
          min={field.min}
          max={field.max}
          type={field.type}
        />
      ))}
    </section>
  );

  return (
    <form onSubmit={handleSubmit} className={`form`} style={styleForm}>
      {title && <h2>{title}</h2>}
      {/* Render sections if provided */}
      {sections && sections.map(section => 
        renderSection(section.title, section.fields)
      )}

      {/* Render fields without section if provided */}
      {fields && fields.length > 0 && (
        <div className="form-fields">
          {fields.map((field, index) => (
            <Input
              key={index}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              required={field.required}
              options={field.options}
              error={field.error}
              disabled={field.disabled}
              min={field.min}
              max={field.max}
              type={field.type}
            />
          ))}
         
        </div>
      )}
      {/* Render form actions */}
      <div className="form-actions"> 
        <Button text={submitLabel} primary={true} type="submit" onClick={()=>{}}/>
      </div>
    </form>
  );
};

export default Form;
