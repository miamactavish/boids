function initEditor(domEditor) {
    this.editor = ace.edit(domEditor);
    this.editor.setFontSize("16px");
    this.editor.setShowPrintMargin(false);
    this.editor.getSession().setTabSize(2);
    this.editor.getSession().setMode("ace/mode/javascript");
    this.editor.getSession().setUseWrapMode(true);
    this.editor.getSession().setValue("// Code goes here");
    this.editor.focus();
  };
initEditor("editor");