import React from 'react';

export default function App() {
  const [formData, setFormData] = React.useState({ 
    name: '', 
    message: '', 
    email: '' 
  });

  const handleChange = (event) => {
    const {name,value} = event.target;
    setFormData({...formData,[name]: value});
  };
  const submitForm =(e) => {
    e.preventDefault();
    console.table(formData);
    // send form data to api if sucess reset  else show error!
      setFormData({
          name: '',
          message: '',
          email: '' 
      })
  }

  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}>
         {FORM_FIELDS.map((field, index) => (
                <div key={index} className="form-field">
                    <label 
                        className={field.label.className} 
                        htmlFor={field.label.htmlFor}
                    >
                        {field.label.htmlFor.charAt(0).toUpperCase() + field.label.htmlFor.slice(1)}
                    </label>
                    <input
                        type={field.input.type}
                        className={field.input.className}
                        name={field.input.name}
                        id={field.input.id}
                        title={field.input.title}
                        required={field.input.required || false}
                        maxLength={field.input.maxLength || ''}
                        value={formData[field.input.name] || ''}
                        onChange={handleChange}
                    />
                </div>
            ))}
            <button type="submit">Submit</button>
    </form>
  );
}

export const FORM_FIELDS = [
    {
        label: {
            className: 'form-name',
            htmlFor: 'name'
        },
        input: {
            type: 'text',
            className: 'form-name',
            name: 'name',
            id: 'form-name',
            title: 'your name',
            require:true
        }
    },
    {
        label: {
            className: 'form-email',
            htmlFor: 'email'
        },
        input: {
            type: 'email',
            className: 'form-email',
            name: 'email',
            id: 'form-email',
            title: 'example@email.com"',
            require:true
        }
    },
        {
        label: {
            className: 'form-message',
            htmlFor: 'message'
        },
        input: {
            type: 'text',
            className: 'form-message',
            name: 'message',
            id: 'form-message',
            title: 'message',
            max:2
        }
    },
];
