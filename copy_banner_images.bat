@echo off
echo Cleaning up old images...
del "preview_cover.png" 2>nul
del "preview_q*.png" 2>nul
del "q*.png" 2>nul
del "hero-bg.png" 2>nul

echo Copying new banner images...
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_cover_1778578793097.png" "banner_cover.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q1_1778578804966.png" "banner_q1.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q2_1778578819685.png" "banner_q2.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q3_1778578833377.png" "banner_q3.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\fb45f356-efe2-45e1-96af-318e15cf0ece\banner_q4_widescreen_1778682594452.png" "banner_q4.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\fb45f356-efe2-45e1-96af-318e15cf0ece\banner_q5_widescreen_1778682616026.png" "banner_q5.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\fb45f356-efe2-45e1-96af-318e15cf0ece\banner_q6_widescreen_1778682638408.png" "banner_q6.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q7_1778578895429.png" "banner_q7.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q8_1778578909260.png" "banner_q8.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q9_1778578923281.png" "banner_q9.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q10_1778578941427.png" "banner_q10.png" /Y

echo Done!
pause
