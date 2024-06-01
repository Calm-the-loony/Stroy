//поиск
var lastResFind = ""; // последний удачный результат
var copy_page = ""; // копия страницы в ихсодном виде

function TrimStr(s) {
    s = s.replace(/^\s+/g, '');
    return s.replace(/\s+$/g, '');
}

function FindOnPage(inputId) { //ищет текст на странице, в параметр передается ID поля для ввода
    var obj = window.document.getElementById(inputId);
    var textToFind;

    if (obj) {
        textToFind = TrimStr(obj.value); //обрезаем пробелы
    } else {
        alert("Введенная фраза не найдена");
        return;
    }
    if (textToFind == "") {
        alert("Вы ничего не ввели");
        return;
    }

    if (document.body.innerHTML.indexOf(textToFind) == "-1")
        alert("Ничего не найдено, проверьте правильность ввода!");

    if (copy_page.length > 0)
        document.body.innerHTML = copy_page;
    else copy_page = document.body.innerHTML;


    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " "); //стираем предыдущие якори для скрола
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a class='highlighted' name=" + textToFind + ">" + textToFind + "</a>"); //Заменяем найденный текст ссылками с якорем;
    lastResFind = textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
    window.location = '#' + textToFind; //перемещаем скрол к последнему найденному совпадению
}


  //меню
  function toggleMenu() {
    var submenu = document.querySelector('.submenu');
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}

//избранное на карточке
function toggleFavorite(button) {
  button.classList.toggle('favorited');
}

//карусель
 $(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 4, // Количество отображаемых слайдов
      slidesToScroll: 2, // Количество прокручиваемых слайдов
    });
  });

  window.addEventListener('scroll', function() {
    var progressBar = document.getElementById('progress-bar');
    var scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = scrollPercentage + '%';
  });



  document.querySelectorAll('.activity-item').forEach(item => {
    item.addEventListener('click', () => {
      const description = item.getAttribute('data-description');
      openModal(description);
    });
  });
  
  function openModal(activity) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('activity-title');
    const modalDescription = document.getElementById('activity-description');
  
    let title, description;
  
    switch (activity) {
      case 'design':
        title = 'Проектирование';
        description = '<p>Проектирование является первоначальным этапом любого строительства. Деятельность по проектированию предприятий, зданий и сооружений в соответствии с государственным стандартом включает в себя разработку проектной документации на строительство, расширение, реконструкцию, капитальный ремонт и техническое перевооружение предприятий, зданий и сооружений жилого, производственного, социального, культурно-бытового, специального и иного назначения и их комплексов, инженерной и транспортной инфраструктур.</p>';
        break;
      case 'inspection':
        title = 'Обследование технических состояний зданий и сооружений';
        description = '<p>Существует ряд факторов, вызывающих необходимость проведения работ по обследованию и оценке технического состояния зданий и сооружений. Основные из них это:</p><p>- факторы, обусловленные влиянием окружающей природной среды;</p><p>- факторы, обусловленные влиянием социально-экономической среды.</p>';
        break;
      case 'engineering':
        title = 'Инженерные изыскания для строительства';
        description = '<p>Инженерные изыскания обеспечивают комплексное изучение природных и техногенных условий на территории строительства, составление прогнозов взаимодействия этих объектов с окружающей средой, обоснование их инженерной защиты и безопасных условий жизни населения.</p>';
        break;
      case 'environmental-protection':
        title = 'Охрана окружающей среды';
        description = '<p>В настоящее время формируется и последовательно реализуется единая государственная политика в области экологии, направленная на охрану окружающей среды и рациональное использование природных ресурсов.</p>';
        break;
      case 'geological-justification':
        title = 'Горно-геологическое обоснование для строительства';
        description = '<p>Разработка горно-геологического обоснования (ГГО) застройки площадей залегания полезных ископаемых проводится на основании Положения № 64, разработанного Управлением по охране недр и геолого-маркшейдерского контроля Госгортехнадзора РФ.</p>';
        break;
      case 'construction':
        title = 'Промышленное и гражданское строительство';
        description = '<p>ООО "Ростовгипрошахт" имеет лицензию Государственного комитета Российской Федерации по строительству и жилищно-коммунальному комплексу на осуществление строительства зданий и сооружений I и II уровней ответственности в соответствии с государственным стандартом на территории Российской Федерации.</p>';
        break;
      case 'client-representation':
        title = 'Выполнение функций заказчика-застройщика';
        description = '<p>ООО "Ростовгипрошахт", выполняя функции заказчика-застройщика, вправе осуществлять нижеследующее: Получение и оформление исходных данных для проектирования объектов строительства (резервирование земельного участка, технико-экономические обоснования, технические условия на присоединение инженерных коммуникаций, строительный паспорт)</p>';
        break;
      case 'engineering-consulting':
        title = 'Инжиниринговый консалтинг';
        description = '<p>Предложение, разработка, реализация имеющихся инвестиционных проектов; Экспертная оценка технического состояния и стоимостная оценка действующих и приобретаемых предприятий. Консультации по технологическим вопросам;</p>';
        break;
      default:
        title = '';
        description = '';
        break;
    }
  
    modalTitle.innerHTML = title;
    modalDescription.innerHTML = description;
  
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  
  

//баннер
// Отображение модального окна
function showModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Переадресация на WhatsApp
function redirectToWhatsApp() {
  window.location.href = 'https://wa.me/номер_WhatsApp';
}
function redirectToTelegram() {
  window.location.href = 'https://t.me/Calm_the_loony';
}

// Инициирование звонка
function makePhoneCall() {
  window.location.href = 'tel:+9614277510';
}


//шапка сворачивается при отпределенном количестве прокрутки, позже доделать
let prevScrollPos = window.pageYOffset;
let isMenuOpen = false; // Флаг для отслеживания состояния меню

function scrollHandler(event) {
    const currentScrollPos = window.pageYOffset;
    const header = document.getElementById("header");
    const actionContainer = document.querySelector(".action-container");
    const submenu = document.querySelector('.submenu');

    if (prevScrollPos > currentScrollPos || currentScrollPos < actionContainer.offsetTop + actionContainer.offsetHeight) {
        header.style.height = "100px"; /* Показываем шапку при прокрутке вверх или если мы выше action-container */
        actionContainer.style.marginLeft = "0"; // Вернуть обычный margin-left
    } else {
        header.style.height = "50px"; /* Скрываем верхнюю часть шапки при прокрутке вниз и нахождении ниже action-container */
        submenu.style.display = 'none'; // Скрываем подменю при прокрутке вниз
        actionContainer.style.marginLeft = "-7px"; 
        isMenuOpen = false; // Сбрасываем флаг меню
    }
    
    prevScrollPos = currentScrollPos;
}

function toggleMenu() {
    const header = document.querySelector('.header');
    const submenu = document.querySelector('.submenu');
    const logoText = document.querySelector('.logo-text');

    // Если шапка свернута, развернуть её
    if (!isMenuOpen) {
        header.style.height = '100px'; // Вернуть обычную высоту
        logoText.style.opacity = '1'; 
        submenu.style.display = 'block'; // Показ подменю
        isMenuOpen = true;
    } else {
        // Иначе, свернуть шапку и скрыть подменю
        header.style.height = '50px';
        submenu.style.display = 'none';
        isMenuOpen = false;
    }
}

