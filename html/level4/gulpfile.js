// gulp�v���O�C����ǂݍ��݂܂�
const { src, dest, watch } = require("gulp");
// Sass���R���p�C������v���O�C����ǂݍ��݂܂�
const sass = require("gulp-sass");

/**
 * Sass���R���p�C������^�X�N�ł�
 */
const compileSass = () =>
  // style.scss�t�@�C�����擾
  src("css/style.scss")
    // Sass�̃R���p�C�������s
    .pipe(
      // �R���p�C�����CSS��W�J
      sass({
        outputStyle: "expanded"
      })
    )
    // css�t�H���_�[�ȉ��ɕۑ�
    .pipe(dest("css"));

/**
 * Sass�t�@�C�����Ď����A�ύX����������Sass��ϊ����܂�
 */
const watchSassFiles = () => watch("css/style.scss", compileSass);

// npx gulp�Ƃ����R�}���h�����s�������AwatchSassFiles�����s�����悤�ɂ��܂�
exports.default = watchSassFiles;