export function isAllInputsValid() {
  const inputs = document.querySelectorAll('input.text-input') as NodeListOf<HTMLInputElement>;
  let isValid = true;
  for (let i = 0; i < inputs.length; i += 1) {
    if ('isValid' in inputs[i].dataset) {
      if (inputs[i].dataset.isValid === 'false') {
        isValid = false;
        break;
      }
    } else {
      isValid = false;
      break;
    }
  }
  return isValid;
}

export function getDataFromInputs(ids: Array<string>) {
  const data: Record<string, any> = {};
  ids.forEach((id) => {
    const element: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement;
    data[id] = element.value;
  });
  return data;
}
