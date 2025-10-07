// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0
let timeInterval = null
document.getElementById('btnClick').addEventListener('click', () => {
  clickCount++
  render(`You clicked the button <strong>${clickCount}</strong> times.`)
})


/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblClickCard = document.getElementById('dblCard')
dblClickCard.addEventListener('dblclick', () => {
  dblClickCard.classList.toggle('activated')
   const state = dblClickCard.classList.contains('activated') ? 'ON' : 'OFF'
   render(`Double-click toggle is <strong>${state}</strong>.`)
})



/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */
const kbKey = document.getElementById('kbKey')
const kbCode = document.getElementById('kbCode')
document.addEventListener('keydown', (e) => {
  kbKey.textContent = e.key === ' ' ? 'Space' : e.key
  kbCode.textContent = e.code
})


/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */


/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
  render('<span class="text-secondary">Output cleared.</span>')
   // reset demo variables
   clickCount = 0
   hoverCount = 0
   if (timeInterval) clearInterval(timeInterval)
   kbKey.textContent = '--'
   kbCode.textContent = '--'
})

/* =================================================
   🔥 Event Listeners Challenge (Pick ONE to complete)

   Option A — Hover Highlight + Counter
   - Create a variable to track how many times the card was hovered
   - Add event listeners for mouseenter and mouseleave on the card
   - On mouseenter: add a highlight class, increase the counter, and show the count in #out
   - On mouseleave: remove the highlight class and show a message in #out

   Option B — Scroll Progress Bar
   - Add a small Bootstrap progress bar element at the very top of the page
   - Select the inner bar element
   - Write a function that calculates % scrolled
     (current scroll position ÷ total scrollable height)
   - Update the width of the bar with that percentage
   - Run this function when the page loads and on every scroll event

   Option C — Live Input Mirror
   - Add a text input element to the page
   - On every keystroke: update #out with a message that includes the input value
   - If the input is empty: show a neutral placeholder message instead
   - On focus: add a border/shadow class to the input
   - On blur: remove those classes and make sure #out shows the right message
================================================== */
// option A
let hoverCount = 0
const hoverCard = document.getElementById('dblCard')
hoverCard.addEventListener('mouseenter', () => {
  hoverCard.classList.add('activated')
  hoverCount++
  render(`You hovered over the card <strong>${hoverCount}</strong> times.`)
})
hoverCard.addEventListener('mouseleave', () => {
  hoverCard.classList.remove('activated')
  render('You left the card area.')
})

// scroll progress bar
// option B
const progressBar = document.getElementById('progressBar')
function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (scrollTop / scrollHeight) * 100
  progressBar.style.width = `${scrolled}%`
}
window.addEventListener('scroll', updateProgressBar)
window.addEventListener('load', updateProgressBar)