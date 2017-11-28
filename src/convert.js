
export default function convert(context) {
  return function (from, to) {
    const sketch = context.api();
    const document = sketch.selectedDocument;

    if (context.selection.count() === 0) {
      sketch.message('No selection made.');
      return;
    }

    document.selectedLayers.iterateWithFilter('isText', function(layer) {
      const oldText = layer.text;
      const newText = oldText.replace(from, to);

      layer.sketchObject.stringValue = newText;
      layer.sketchObject.name = newText;
    });
  }
}
