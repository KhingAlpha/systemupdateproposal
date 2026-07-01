const errors = [
    {
        code: "0x💔",
        msg: "OPERATION_NOT_PERMITTED",
        detail: "\"No\" is not a recognized input.\nPlease select a valid option to continue."
    },
    {
        code: "ERR_2",
        msg: "INVALID_CHOICE_DETECTED",
        detail: "System cannot process this response.\nHint: try the pink button instead."
    },
    {
        code: "ERR_3",
        msg: "STUBBORNNESS_OVERFLOW",
        detail: "Memory stack full of feelings.\nThe correct answer is still ACCEPT."
    },
    {
        code: "ERR_4",
        msg: "HEART.EXE_CRASHED",
        detail: "Critical process terminated.\nReboot recommended - click ACCEPT."
    },
    {
        code: "ERR_5",
        msg: "UNRESOLVABLE_RESPONSE",
        detail: "This path lead nowhere.\nYour only option is YES. 🩷"
    }
];

let attempts = 0;

function denyUpdate() {
    const errData = errors[Math.min(attempts, errors.length - 1)];
    document.getElementById('errorCode').textContent = errData.code;
    document.getElementById('errorMsg').textContent = errData.msg;
    document.getElementById('errorDetail').innerText = errData.detail;

    if (attempts > 0) {
        document.getElementById('errorAttempts').textContent = `attempt ${attempts + 1} of ∞`;
    } else {
        document.getElementById('errorAttempts').textContent = '';
    }

    attempts++;
    document.getElementById('errorOverlay'). classList.add('show');

    // Shake the main window
    const win = document.getElementById('mainWindow');
    win.classList.remove('shake');
    void win.offsetWidth;
    win.classList.add('shake');
}

function closeError() {
    document.getElementById('errorOverlay').classList.remove('show');
}

function acceptUpdate() {
    window.location.href = 'yes.html';
}

//Close overlay when clicking outiside the error window
document.getElementById('errorOverlay').addEventListener('click', function(e) {
    if (e.target === this) denyUpdate(); // clicking outside = another attempt
});