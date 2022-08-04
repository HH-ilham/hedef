import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import "../../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
import { TabTitle } from "../../TitleFunction";
import Table from 'react-bootstrap/Table';

const Testsubject2 = () => {
    TabTitle('Azadlıq filialı');
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold branchheader">Buraxılış fənləri üzrə MQT 5 mövzuları  Azərbaycan bölməsi</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/testsubject1">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
           Geri
          </button>
        </Link>
        <Link to="/testsubject3">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="container">
      <Table striped="columns">
    
<thead>
    <th className="text-center fs-4">Buraxılış mövzuları 1 - 02/04/2022</th> 
</thead>
<tbody>
    <tr>
    <td className="text-center fw-bold">IX sinif </td>
    </tr>
    <tr>
    <td><strong>Русский язык </strong> <br/>
    <strong>Фонетика и графика. Орфография. Орфоэпия.</strong> Звуки речи и буквы. Гласные и согласные. Звонкие и
глухие, твёрдые и мягкие (парные и непарные), шипящие согласные. Алфавит. Обозначение звуков
речи на письме. Буквы, не обозначающие звуков речи. Буквы, употребляющиеся в двух функциях
(е,ё,ю,я). Правописание безударных гласных (проверяемых, непроверяемых, двойных и чередующихся,
беглых). Правописание согласных (проверяемых, непроверяемых, двойных и чередующихся). Буква ь
(для обозначения мягкости согласного, грамматической формы и как разделительный знак).
Правописание разделительного ь и ъ знаков. Гласные после шипящих и в корне слова, суффиксе и
окончании. Буквы ы-и после ц в корне слова, суффиксе и окончании. Употребление букв э и е. Слог.
Слогоделение. Открытый и закрытый слоги. Ударение. Функции ударения. Слова, имеющие два
ударения и слова с двояким ударением. Орфоэпические нормы русского языка. <strong> Лексикология и</strong>
<strong>фразеология</strong>. Понятие о лексике. Лексическое значение слова. Способы толкования лексического
значения слова. Многозначные и однозначные слова. Прямое и переносное значение слова. Омонимы.
Синонимы. Антонимы. Паронимы. Исконно русские и заимствованные (исключая старославянизмы)
слова. Устаревшие (архаизмы и историзмы) и новые слова (неологизмы). Общеупотребительные слова.
Профессиональные и диалектные слова.<br/>
<strong>Английский язык</strong><br/>
ИNoun. To be. There is / are. It is. Vocabulary (включая 1-8 параграфы (юниты) 5 класса). Listening and
Reading Comprehension <br/>
<strong>Математика</strong><br/>
Натуральные числа. Обыкновенные и десятичные дроби
</td>
    </tr>
    <tr>
    <td className="text-center fw-bold">X sinif </td>
    </tr>
        <tr>
    <td><strong>Русский язык </strong> <br/>
    <strong>Фонетика и графика. Орфография. Орфоэпия.</strong> Звуки речи и буквы. Гласные и согласные. Звонкие и
глухие, твёрдые и мягкие (парные и непарные), шипящие согласные. Алфавит. Обозначение звуков
речи на письме. Буквы, не обозначающие звуков речи. Буквы, употребляющиеся в двух функциях
(е,ё,ю,я). Правописание безударных гласных (проверяемых, непроверяемых, двойных и чередующихся,
беглых). Правописание согласных (проверяемых, непроверяемых, двойных и чередующихся). Буква ь
(для обозначения мягкости согласного, грамматической формы и как разделительный знак).
Правописание разделительного ь и ъ знаков. Гласные после шипящих и в корне слова, суффиксе и
окончании. Буквы ы-и после ц в корне слова, суффиксе и окончании. Употребление букв э и е. Слог.
Слогоделение. Открытый и закрытый слоги. Ударение. Функции ударения. Слова, имеющие два
ударения и слова с двояким ударением. Орфоэпические нормы русского языка. <strong> Лексикология и</strong>
<strong>фразеология</strong>. Понятие о лексике. Лексическое значение слова. Способы толкования лексического
значения слова. Многозначные и однозначные слова. Прямое и переносное значение слова. Омонимы.
Синонимы. Антонимы. Паронимы. Исконно русские и заимствованные (исключая старославянизмы)
слова. Устаревшие (архаизмы и историзмы) и новые слова (неологизмы). Общеупотребительные слова.
Профессиональные и диалектные слова.<br/>
<strong>Английский язык</strong><br/>
ИNoun. To be. There is / are. It is. Vocabulary (включая 1-8 параграфы (юниты) 5 класса). Listening and
Reading Comprehension <br/>
<strong>Математика</strong><br/>
Натуральные числа. Обыкновенные и десятичные дроби
</td>
    </tr>
      <tr>
    <td><strong>Русский язык </strong> <br/>
    <strong>Фонетика и графика. Орфография. Орфоэпия.</strong> Звуки речи и буквы. Гласные и согласные. Звонкие и
глухие, твёрдые и мягкие (парные и непарные), шипящие согласные. Алфавит. Обозначение звуков
речи на письме. Буквы, не обозначающие звуков речи. Буквы, употребляющиеся в двух функциях
(е,ё,ю,я). Правописание безударных гласных (проверяемых, непроверяемых, двойных и чередующихся,
беглых). Правописание согласных (проверяемых, непроверяемых, двойных и чередующихся). Буква ь
(для обозначения мягкости согласного, грамматической формы и как разделительный знак).
Правописание разделительного ь и ъ знаков. Гласные после шипящих и в корне слова, суффиксе и
окончании. Буквы ы-и после ц в корне слова, суффиксе и окончании. Употребление букв э и е. Слог.
Слогоделение. Открытый и закрытый слоги. Ударение. Функции ударения. Слова, имеющие два
ударения и слова с двояким ударением. Орфоэпические нормы русского языка. <strong> Лексикология и</strong>
<strong>фразеология</strong>. Понятие о лексике. Лексическое значение слова. Способы толкования лексического
значения слова. Многозначные и однозначные слова. Прямое и переносное значение слова. Омонимы.
Синонимы. Антонимы. Паронимы. Исконно русские и заимствованные (исключая старославянизмы)
слова. Устаревшие (архаизмы и историзмы) и новые слова (неологизмы). Общеупотребительные слова.
Профессиональные и диалектные слова.<br/>
<strong>Английский язык</strong><br/>
ИNoun. To be. There is / are. It is. Vocabulary (включая 1-8 параграфы (юниты) 5 класса). Listening and
Reading Comprehension <br/>
<strong>Математика</strong><br/>
Натуральные числа. Обыкновенные и десятичные дроби
</td>
    </tr>
    <tr>
    <td className="text-center fw-bold">X sinif </td>
    </tr>
    <tr>
    <td><strong>Azərbaycan dili</strong> <br/>
    Fonetika. Səs və hərf. Sait səslər. Saitlərin deyilişi və yazılışı. Ahəng qanunu. Samit səslər. Samitlərin
deyilişi və yazılışı. Sözlərin sonunda cingiltili samitlərin yazılışı və tələffüzü. Sonu q və k ilə bitən
sözlərin yazılışı və tələffüzü. . Qoşa samitlə bitən təkhecalı sözlər. Vurğu. Sözün sətirdən-sətrə
keçirilməsi. Fonetik təhlil. <br/>
<strong>İngilis dili</strong><br/>
Noun. To be. There is / are. It is. Vocabulary (V sinif unit 1– 8 daxil olmaqla). Listening and Reading
Comprehension<br/>
<strong>Rus dili</strong><br/>
Фонетика. Буквы ь и ъ. Двойная роль букв е, ё, ю, я. Лексикология. Лексическое значение слова.
Прямое и переносное значение слова. Синонимы. Антонимы.<br/>
<strong>Riyaziyyat</strong><br/>
Natural ədədlər. Adi və onluq kəsrlər.</td>
    </tr>
    <tr>
    <td className="text-center fw-bold">IX sinif </td>
    </tr>
    <tr>
    <td><strong>Azərbaycan dili</strong> <br/>
    Fonetika. Danışıq səsləri. Ahəng qanunu. Bəzi saitlərin uzun tələffüz edilməsi. Qoşasaitli və
qoşasamitli sözlərin yazılışı və tələffüzü. Əlifba. Sonu eynicinsli qoşa samitlə bitən söz köklərinin
yazılışı. Sözlərin sonunda cingiltili samitlərin yazılışı və tələffüzü. Sonu q və k ilə bitən sözlərin
yazılışı və tələffüzü. Heca. Vurğu. Sözün sətirdən sətrə keçirilməsi. Fonetik təhlil.<br/>
Leksika. Sözün leksik və qrammatik mənası. Sözün həqiqi və məcazi mənası. Təkmənalı və çoxmənalı
sözlər. Omonimlər. Omonim və çoxmənalı sözlərin fərqi və oxşarlığı. Sinonimlər. Antonimlər.
Ümumişlək və ümumişlək olmayan sözlər. Dialekt sözlər, terminlər (ixtisas sözlər), arxaizmlər,
neologizmlər ümumişlək olmayan söz qrupları kimi. Sözlərin mənşəyi. Frazeoloji birləşmələr, onların
omonimliyi, sinonimliyi, antonimliyi. Lüğətlər. Leksik təhlil. .<br/>
<strong>İngilis dili</strong><br/>
Noun. To be. There is / are. It is. Vocabulary (V sinif unit 1– 8 daxil olmaqla). Listening and Reading
Comprehension<br/>
<strong>Rus dili</strong><br/>
Фонетика. Буквы ь и ъ. Двойная роль букв е, ё, ю, я. Лексикология. Лексическое значение слова.
Прямое и переносное значение слова. Синонимы. Антонимы.<br/>
<strong>Riyaziyyat</strong><br/>
</td>
    </tr>
</tbody>

</Table>
</div>
      <CFooter />
    </div>

    );
}

export default Testsubject2;
