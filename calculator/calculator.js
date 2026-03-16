
    (function(){
      const expressionEl = document.getElementById('expression');
      const resultEl = document.getElementById('result');
      const keys = document.querySelectorAll('button.key');
      const historyEl = document.getElementById('history');
      const themeToggle = document.getElementById('themeToggle');
      const copyBtn = document.getElementById('copyBtn');
      const clearHistoryBtn = document.getElementById('clearHistory');
      const pasteExprBtn = document.getElementById('pasteExpr');
      const insertParBtn = document.getElementById('insertPar');

      let expr = '';
      let currentResult = '0';
      let history = JSON.parse(localStorage.getItem('sleek_calc_history')||'[]');
      let dark = true;

      function render(){
        expressionEl.textContent = expr || '0';
        resultEl.textContent = currentResult;
        renderHistory();
      }

      function renderHistory(){
        historyEl.innerHTML = '';
        if(history.length === 0){ historyEl.innerHTML = '<p style="color:var(--muted);padding:12px">No history yet — do some math ✨</p>'; return }
        history.slice().reverse().forEach((h,i)=>{
          const item = document.createElement('div'); item.className='h-item';
          const left = document.createElement('div');
          const right = document.createElement('div');
          left.innerHTML = `<p>${h.expr}</p><small>${new Date(h.time).toLocaleString()}</small>`;
          right.innerHTML = `<p style="font-weight:600">${h.result}</p>`;
          item.appendChild(left); item.appendChild(right);
          item.addEventListener('click', ()=>{
            expr = h.expr; currentResult = h.result; render();
          });
          historyEl.appendChild(item);
        })
      }

      function pushHistory(e, r){
        history.push({expr:e, result:r, time:Date.now()});
        if(history.length>200) history.shift();
        localStorage.setItem('sleek_calc_history', JSON.stringify(history));
      }

      function sanitizeForEval(s){
        // turn Unicode operators into JS
        s = s.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-');
        // convert percentages like 50% into (50/100)
        s = s.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
        // small safety check: only allow 0-9 . + - * / ( ) and spaces
        if(!/^[0-9+\-*/().\s]+$/.test(s)) return null;
        return s;
      }

      function evaluateExpression(){
        if(!expr) return;
        const s = sanitizeForEval(expr);
        if(s===null){ currentResult = 'Err'; render(); return }
        try{
          // use Function for safer eval scope
          const val = Function('return ('+s+')')();
          if(typeof val === 'number' && isFinite(val)){
            currentResult = Number(Math.round(val*1e12)/1e12).toString();
            pushHistory(expr, currentResult);
          } else {
            currentResult = 'Err';
          }
        }catch(e){ currentResult = 'Err' }
        render();
      }

      keys.forEach(k=>{
        k.addEventListener('click', ()=>{
          const v = k.dataset.value;
          const action = k.dataset.action;
          if(action === 'clear'){
            expr=''; currentResult='0'; render(); return
          }
          if(action === 'back'){
            expr = expr.slice(0,-1); render(); return
          }
          if(action === 'equals'){
            evaluateExpression(); return
          }
          // normal key
          if(v){ expr += v; render(); }
        })
      })

      // keyboard support
      window.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){ e.preventDefault(); evaluateExpression(); }
        else if(e.key === 'Backspace'){ expr = expr.slice(0,-1); render(); }
        else if(e.key === 'Escape'){ expr=''; currentResult='0'; render(); }
        else {
          const allowed = '0123456789+-*/().%';
          if(allowed.includes(e.key)){
            expr += e.key; render();
          }
        }
      })

      // utilities
      copyBtn.addEventListener('click', async ()=>{
        try{
          await navigator.clipboard.writeText(currentResult);
          copyBtn.textContent = 'Copied!';
          setTimeout(()=>copyBtn.textContent='Copy',900);
        }catch(e){ copyBtn.textContent = 'No clipboard'; setTimeout(()=>copyBtn.textContent='Copy',900) }
      })

      clearHistoryBtn.addEventListener('click', ()=>{
        if(confirm('Clear calculator history?')){ history = []; localStorage.removeItem('sleek_calc_history'); renderHistory(); }
      })

      pasteExprBtn.addEventListener('click', async ()=>{
        try{
          const text = await navigator.clipboard.readText(); expr += text; render();
        }catch(e){ alert('Clipboard access denied') }
      })

      insertParBtn.addEventListener('click', ()=>{
        // attempt balanced parens insert
        const open = (expr.match(/\(/g)||[]).length;
        const close = (expr.match(/\)/g)||[]).length;
        if(open>close) expr += ')'; else expr += '(';
        render();
      })

      themeToggle.addEventListener('click', ()=>{
        dark = !dark;
        if(!dark){
          document.documentElement.style.setProperty('--bg','#f8fafc');
          document.documentElement.style.setProperty('--card','#ffffff');
          document.documentElement.style.setProperty('--accent','#7c3aed');
          document.documentElement.style.setProperty('--muted','#475569');
          document.documentElement.style.setProperty('color','#0b1220');
          document.body.style.color = '#0b1220';
        } else { window.location.reload(); }
      })

      // initial render
      render();
    })();