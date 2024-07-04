export interface FormField {
  name: string;
  type: string;
  label: any;
  placeholder: any;
  options?: {
    placeholder?: any;
    label: string;
    value: string;
  }[];
  more_fields?: boolean;
  size?: number;
  required: boolean;
  multiple?: boolean;
  add_more?: boolean;
  readonly?: boolean;
  image?: boolean;
}
