import { Form } from "./Form";
import { InputProps } from '../../components/Input/Input';

const basicInformationFields: InputProps[] = [
  { type: 'text', label: 'Title', name: 'title', required: true, placeholder: 'Enter recipe title' },
  { type: 'textarea', label: 'Description', name: 'description', placeholder: 'Brief description' },
  { type: 'select', label: 'Category', name: 'category', required: true, options: [
    { label: 'Main Dishes', value: 'main' },
    { label: 'Desserts', value: 'desserts' },
  ]},
  {type:"RADIO", label:"Is Vegetarian", name:"isVegetarian", required:true, options:[{label:"Yes", value:"yes"}, {label:"No", value:"no"}]},
  {type:"CHECKBOX", label:"Is Vegan", name:"isVegan", required:true, options:[{label:"Yes", value:"yes"}, {label:"No", value:"no"}]},
];

const recipeDetailsFields: InputProps[] = [
  { type: 'number', label: 'Preparation Time', name: 'prepTime', required: true, min: 0 },
  { type: 'number', label: 'Cooking Time', name: 'cookTime', required: true, min: 0 },
  { type: 'number', label: 'Servings', name: 'servings', required: true, min: 1 },
  {type:"select", label:"Difficulty", name:"difficulty", required:true, options:[{label:"Easy", value:"easy"}, {label:"Medium", value:"medium"}, {label:"Hard", value:"hard"}]},
  {type:"select", label:"Cost Range", name:"costRange", required:true, options:[{label:"Budget", value:"budget"}, {label:"Moderate", value:"moderate"}, {label:"Expensive", value:"expensive"}]},
  {type:"textarea", label:"Notes", name:"notes", placeholder:"Enter any additional notes"},
];

const ingredientFields: InputProps[] = [
  { type: 'text', label: 'Ingredient Name', name: 'name', required: true, placeholder: 'Enter ingredient name'},
  { type: 'number', label: 'Quantity', name: 'quantity', required: true, min: 0 },
  { type: 'select', label: 'Unit', name: 'unit', required: true, options: [
    { label: 'grams', value: 'gr' },
    { label: 'kilograms', value: 'kg' },
    { label: 'milliliters', value: 'ml' },
    { label: 'liters', value: 'l' },
    { label: 'ounces', value: 'oz' },
    { label: 'pounds', value: 'lb' },
    { label: 'pinch', value: 'pinch' },
    { label: 'teaspoon', value: 'tsp' },
    { label: 'tablespoon', value: 'tbsp' },
    { label: 'cup', value: 'cup' },
    { label: 'pint', value: 'pint' },
    { label: 'quart', value: 'quart' },
    { label: 'gallon', value: 'gallon' },
  ], },
];

const instructionFields: InputProps[] = [
  { type: 'number', label: 'Step', name: 'step', required: true, min: 1 },
  { type: 'textarea', label: 'Description', name: 'description', required: true, placeholder: 'Enter step description' },
];

export default {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    sections: { control: 'object' },
    styleForm: { control: 'object' },
    styleSection: { control: 'object' },
    buttonStyle: { control: 'object' },
  },
};

// Simple form without sections
export const SimpleForm ={
  args: {
    fields: basicInformationFields,
    title: 'Basic Information',
    onSubmit: (data: any) => console.log('Form submitted:', data),
  },
};

// Form with multiple sections
export const SectionedForm = {
  args: {
    title: 'Recipe Form',
    sections: [
      { title: 'Basic Information', fields: basicInformationFields },
      { title: 'Recipe Details', fields: recipeDetailsFields },
      { title: 'Ingredients', fields: ingredientFields },
      { title: 'Instructions', fields: instructionFields },
    ],
    onSubmit: (data:any) => console.log('Form submitted:', data),
  },
};