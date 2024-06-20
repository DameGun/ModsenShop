import Input, { InputProps } from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { FormControlContainer, FormControlErrorMessage } from './styled';

interface FormControlProps extends Pick<InputProps<null>, 'icon' | 'disableResetButton'> {
  id: string;
  name: string;
  placeholder: string;
  elementType: 'input' | 'textArea';
}

export default function FormControl({
  id,
  name,
  placeholder,
  elementType,
  ...props
}: FormControlProps) {
  return (
    <Field id={id} name={name}>
      {({ field }: FieldProps<string>) => (
        <FormControlContainer>
          {elementType == 'textArea' ? (
            <TextArea placeholder={placeholder} {...field} />
          ) : (
            <Input placeholder={placeholder} {...field} {...props} />
          )}
          <ErrorMessage component={FormControlErrorMessage} name={name} />
        </FormControlContainer>
      )}
    </Field>
  );
}
