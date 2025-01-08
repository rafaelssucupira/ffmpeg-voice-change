# Truncando tanto o width quanto o height
## o codec libx264 exige que o width e height da imagem seja divisivel por 2
'-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2'
'-filter_complex', '[0:v]scale=trunc(iw/2)*2:trunc(ih/2)*2[bg];[bg][2:v]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2'

// const filter0 = '[0:v]scale=trunc(iw/2)*2:trunc(ih/2)*2,drawtext=fontfile=\'./comicbd.ttf\':text=\'Bom dia Amigos !\':fontcolor=white:fontsize=26:x=(w-text_w)/2:y=40,drawtext=fontfile=\'./comicbd.ttf\':text=\'Jesus Resolve\':fontcolor=white:fontsize=26:x=(w-text_w)/2:y=(h-text_h)/2+75[bg]';
// const filter1 = '[1:v]scale=150:150[avatar]';
// const filter2 = '[bg][avatar]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2-40[bg_with_avatar]';
// const filter3 = '[2:v]scale=trunc(iw/2)*2:trunc(ih/2)*2[gif];[bg_with_avatar][gif]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)+40';

// const filter = `${filter0};${filter1};${filter2};${filter3}`;
