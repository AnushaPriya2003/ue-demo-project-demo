export default function decorate(block) {
  // --- Universal Editor instrumentation ---
<<<<<<< HEAD
  block.setAttribute('data-aue-resource', 'urn:aemconnection:/content/ue-demo/en/home/jcr:content/root/hero');
  block.setAttribute('data-aue-type', 'component');
  block.setAttribute('data-aue-label', 'Hero');
=======
  block.setAttribute('data-aue-resource', 'urn:aemconnection:/content/ue-demo-project-demo/jcr:content/root/container/hero');
  block.setAttribute('data-aue-type', 'container');
  block.setAttribute('data-aue-label', 'Hero');
  block.setAttribute('data-aue-model', 'hero');
  block.setAttribute('data-aue-behavior', 'component');
>>>>>>> 233eaa86e1485ee628d418949207a30dcd081934

  // Instrument individual fields
  const title = block.querySelector('h1, h2');
  if (title) {
<<<<<<< HEAD
    title.setAttribute('data-aue-prop', 'title');
    title.setAttribute('data-aue-type', 'text');
    title.setAttribute('data-aue-label', 'Hero Title');
  }
=======
    title.setAttribute('data-aue-resource', 'urn:aemconnection:/content/ue-demo-project-demo/jcr:content/root/container/hero');
    title.setAttribute('data-aue-prop', 'title');
    title.setAttribute('data-aue-type', 'richtext');
    title.setAttribute('data-aue-label', 'Hero Title');
  }
  const desc = block.querySelector('p');
  if (desc) {
    desc.setAttribute('data-aue-resource', 'urn:aemconnection:/content/ue-demo-project-demo/jcr:content/root/container/hero');
    desc.setAttribute('data-aue-prop', 'description');
    desc.setAttribute('data-aue-type', 'richtext');
    desc.setAttribute('data-aue-label', 'Hero Description');
  }

  const img = block.querySelector('picture, img');
  if (img) {
    img.setAttribute('data-aue-resource', 'urn:aemconnection:/content/ue-demo-project-demo/jcr:content/root/container/hero');
    img.setAttribute('data-aue-prop', 'image');
    img.setAttribute('data-aue-type', 'media');
    img.setAttribute('data-aue-label', 'Hero Image');
  }
>>>>>>> 233eaa86e1485ee628d418949207a30dcd081934
}
