function visibility()
{
    const on = '<img class="visibility_off" src="logo/visibility_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg">'
    const off = '<img class="visibility_off" src="logo/visibility_off_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg">'
    const input = document.querySelector('.password_input');

    let btval = document.querySelector('.show_ps');

    if(btval.innerHTML === off && input.type === "password")
    {
        btval.innerHTML = on;
        input.type = "text";
    }
    else
    {
        btval.innerHTML = off;
        input.type = "password";
    }
}