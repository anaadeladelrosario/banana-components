import {Input} from './Input';



export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'textarea', 'select', 'checkbox', 'radio'] },
    label: { control: 'text' },
    name: { control: 'text' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
  },

}

// You can add more stories with different menu configurations
export const Select = {
  args: {
    type: 'select',
    label: 'Unit',
    name: 'unit',
    required: false,
    placeholder: 'Enter recipe unit',
    options: [
      { label: 'grams', value: 'gr' },
      { label: 'kilograms', value: 'kg' },
      { label: 'milliliters', value: 'ml' },
      { label: 'liters', value: 'l' },
    ],
  },
};

export const TextArea = {
  args: {
    type: 'textarea',
    label: 'Description',
    name: 'description',
    required: true,
    placeholder: 'Enter step description',
  },
};

export const Text = {
  args: {
    type: 'text',
    label: 'Title',
    name: 'title',
    required: true,
    placeholder: 'Enter recipe title',
  },
};

export const RadioButton = {
  args: {
    type: 'RADIO',
    label: 'Si o No',
    name: 'radio',
    required: true,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const Checkbox = {
  args: {
    type: 'CHECKBOX',
    label: 'To be or not to be',
    name: 'checkbox',
    options: [
      { label: '2B', value: '2b' },
      { label: 'Not 2B', value: 'not2b' },
    ],
    required: false,
  },
};

export const Number = {
  args: {
    type: 'number',
    label: 'Step',
    name: 'step',
    required: true,
    min: 1,
    max: 10,
  },
};
