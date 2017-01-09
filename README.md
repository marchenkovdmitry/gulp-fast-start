# gulp_fast_start

![previewImgMain](https://github.com/marchenkovdmitry/gulp_fast_start/blob/master/gulp.png?raw=true "")


Что это?
========================

Это простой стартовый комплект чтобы начать использовать Gulp, буквально в пару команд консоли.
Включает в себя встроенный минификатор css (gulp-cssmin), минификатор html (gulp-htmlmin), компилятор Jade (Pug.js) в html (gulp-pug), компрессор JS (gulp-uglify), компрессор SVG графики (gulp-svgmin), отслеживание изменений в файлах проекта (gulp-watch).


Установка
========================

1. Скачать репозиторий себе, с гитхаба, или git Bash -> git clone "url".
2. Убедиться, что на компьютере установлен Node.js
2. Открыть консоль в папке проекта и вызвать команду npm i. Дождаться установки зависимостей. (В windows консоль в паке открывается shift+правая кнопка мыши -> Открыть окно команд)
3. Вызвать команду gulp (Если выдаст ошибку, вызвать команду npm i gulp)
4. Для завершения работы над проектом нажать Ctrl+C.

**В gulpfile.js описаны все таски. Есть подробные комментарии.**


Возможные команды
========================

**gulp cssm** - сжатие css.

**gulp htmlm** - сжатие обычного html (если вы в проекте не используете Jade(Pug.js). Если используете "gulp pug", использовать "gulp htmlm" нет необходимости, на выходе "gulp pug" уже сжатый html.

**gulp pug** - компиляция Jade(Pug.js) в html.

**gulp jsm** - сжатие javaScript (минификация).

**gulp svgm** - сжатие SVG графики.

**gulp prod** - выполняет все команды, с 1-5 в списке.

**gulp watch** - самостоятельное отслеживание изменений в файлах и запуск соответствующего процесса.


Структура папок
========================

**src** - исходники проекта. В папке css файлы стилей, в html разметка страницы, в img - графика, js - скрипты. index.pug - стили препроцессора Jade(Pug.js). 

**app** - собранный проект, готовый к использованию. 
