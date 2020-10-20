let mails = [
    {
        from: 'dsads@ex333ple.com',
        to: 'bbb@blamail.com',
        subject: 'Happy new Year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        date: '00:00'
    },
    {
        from: 'markzuck@exam.com',
        to: 'alavagyan05@gmail.com, ...',
        subject: 'We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        countOfGetters: 2,
        date: 'JUN 10'
    },
    {
        from: 'aa2112a@dasdasd.com',
        to: 'bbb@blamail.com',
        subject: 'Happy new Year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        date: '00:00'
    },
    {
        from: 'dsaf@exam.com',
        to: 'alavagyan05@gmail.com, ...',
        subject: 'We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        countOfGetters: 2,
        date: 'JUN 10'
    },
    {
        from: 'aaa@example.com',
        to: 'bbb@blamail.com',
        subject: 'Happy new Year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        date: '00:00'
    },
    {
        from: 'markzuck@exam.com',
        to: 'alavagyan05@gmail.com, ...',
        subject: 'We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        countOfGetters: 2,
        date: 'JUN 10'
    },
    {
        from: 'aaa@example.com',
        to: 'bbb@blamail.com',
        subject: 'Happy new Year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        date: '00:00'
    },
    {
        from: 'markzuck@exam.com',
        to: 'alavagyan05@gmail.com, ...',
        subject: 'We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        countOfGetters: 2,
        date: 'JUN 10'
    },
    {
        from: 'aaa@example.com',
        to: 'bbb@blamail.com',
        subject: 'Happy new Year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        date: '00:00'
    },
    {
        from: 'markzuck@exam.com',
        to: 'alavagyan05@gmail.com, ...',
        subject: 'We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year, We will hire you and pay 200k $/year',
        countOfGetters: 2,
        date: 'JUN 10'
    }
]

let toggled = false;

$(document).ready(function () {
    for (let i = 0; i< mails.length; i++) {
        $('.all-mails-10').append(
        `<div data-mail="1_${i+1}" class="mail-info">
            <img class="mail-image" src="images/icon_mail_sp.svg">
            <p class="mail-text from">${mails[i].from}</p>
            <p class="mail-text to">${mails[i].to}</p>
            <p class="mail-text subject">${mails[i].subject.slice(0, 20)}...</p>
            <p class="mail-text data">${mails[i].date}</p>
        </div>
        <div data-mail="1_${i+1}" class="subject-detail">
            <p class="mail-subject">${mails[i].subject}</p>
        </div>`
        );
    } 
    $('.subject-detail').hide();

    $('.mail-info').click(function () {
            if ($(this).closest('subject-detail').prevObject[0].nextElementSibling.attributes[2].value == 'display: block;') {
                $(this).closest('subject-detail').prevObject[0].nextElementSibling.attributes[2].value = 'display: none;'
            } 
            else {
                $(this).closest('subject-detail').prevObject[0].nextElementSibling.attributes[2].value = 'display: block;'
            }
        }
    );

    $('.dark-light').click(() => {
        if (toggled)  {
            $('html').css('filter','invert(0)')
            $('.screen').css('box-shadow','0 0 10px rgb(153, 152, 152)')
        }
        else {
            $('html').css('filter','invert(0.9)')
            $('.screen').css('box-shadow','0 0 0 rgb(153, 152, 152)')
        }
        toggled = !toggled;
    })
});