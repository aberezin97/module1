export function isAllInputsValid() {
  const inputs = document.querySelectorAll('input.text-input');
  let isValid = true;
  for (let i = 0; i < inputs.length; i++) {
    if ("isValid" in inputs[i].dataset) {
      if (inputs[i].dataset.isValid === "true") {
        continue;
      }
    }
    isValid = false;
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
