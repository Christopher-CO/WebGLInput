var WebGLDocument = {
    WebGLDocumentCopyToClipboard: function (text)
	{
		var tmp = document.createElement("div");
		// �I��p�̃^�O����
		var pre = document.createElement('pre');
		// �e�v�f��CSS�� user-select: none ���ƃR�s�[�ł��Ȃ��̂ŏ���������
		pre.style.webkitUserSelect = 'auto';
		pre.style.userSelect = 'auto';

		tmp.appendChild(pre).textContent = Pointer_stringify(text);

		// �v�f����ʊO��
		var s = tmp.style;
		s.position = 'fixed';
		s.right = '200%';

		// body �ɒǉ�
		document.body.appendChild(tmp);
		// �v�f��I��
		document.getSelection().selectAllChildren(tmp);

		// �N���b�v�{�[�h�ɃR�s�[
		var result = document.execCommand("copy");

		// �v�f�폜
		document.body.removeChild(tmp);
		//return result;
	},
}

mergeInto(LibraryManager.library, WebGLDocument);