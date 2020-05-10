/**
 * Shoout out to those developers who still use form data
 * @param data
 */
export const objectToFormData = (data: any): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach((entry: [string, any]) => {
    formData.append(entry[0], entry[1]);
  });
  return formData;
};
