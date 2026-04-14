export default function decorate(block) {
  // --- Universal Editor instrumentation ---
  block.setAttribute('data-aue-resource', 'urn:aemconnection:/content/ue-demo-project-demo/jcr:content/root/container/hero');
  block.setAttribute('data-aue-type', 'component');
  block.setAttribute('data-aue-label', 'Hero');

  // Instrument individual fields
  const title = block.querySelector('h1, h2');
  if (title) {
    title.setAttribute('data-aue-prop', 'title');
    title.setAttribute('data-aue-type', 'text');
    title.setAttribute('data-aue-label', 'Hero Title');
  }
}
