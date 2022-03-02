var q_curr;
        var q_next;
        var q_prev;
        var q1 = document.getElementById("q1");
        var next = document.getElementById('next')
        var back = document.getElementById('back');
        var subm = document.getElementById('submit');
        q_curr = q1;
        q_next = q_curr.nextElementSibling;
        q_prev = q_curr.previousElementSibling;
        document.addEventListener('DOMContentLoaded', function () {
            {
                next.onclick = function () {
                    if (q_next) {
                        if (!q_next.nextElementSibling) {
                            subm.classList.remove('hidden');
                            next.classList.add('hidden');
                        }
                        else {
                            subm.classList.add('hidden');
                            next.classList.remove('hidden');
                            back.classList.remove('hidden');
                        }
                        q_curr.style.left = "-750px";
                        q_next.style.left = "40px";
                        q_prev = q_curr;
                        q_curr = q_next;
                        q_next = q_curr.nextElementSibling;
                    }
                    else {
                        next.classList.add('hidden');
                        subm.classList.remove('hidden');
                    }
                }
                back.onclick = function () {
                    if (q_prev) {
                        if(!q_prev.previousElementSibling){
                            back.classList.add('hidden');
                        }
                        next.classList.remove('hidden');
                        subm.classList.add('hidden');
                        q_curr.style.left = "750px";
                        q_prev.style.left = "40px";
                        q_next = q_curr;
                        q_curr = q_prev;
                        q_prev = q_curr.previousElementSibling;
                    }
                    else {
                        back.classList.add('hidden');
                    }
                }
            }
        });