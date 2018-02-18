const method_link = event => {
  event.preventDefault();

  const element = event.target;
  const { method } = element.dataset;
  const href = element.getAttribute('href');
  const token = document.querySelector('meta[name="csrf-token"]')
                        .getAttribute('content');
  const form = document.createElement('form');

  form.setAttribute('action', href);
  // This one is important even in case of 
  // DELETE, PATCH, PUT and others method.
  form.setAttribute('method', 'POST');

  const _method = createInput('_method', 'hidden', method);
  const _token = createInput('_token', 'hidden', token);

  form.appendChild(_token);
  form.appendChild(_method);

  document.body.appendChild(form);

  form.submit();
};

const createInput = (name, type, value) => {
  let input = docment.createElement('input');

  input.setAttribute('name', name);
  input.setAttribute('type', type);
  input.setAttribute('value', value);

  return input;
}

const elements = document.querySelectorAll('a.method-link');

for (let element of elements) {
  element.onlick = method_link;
}