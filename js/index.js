document.addEventListener("DOMContentLoaded", () => {
    let $resolutionResult = document.querySelector('.js_resalution-result-self')
    let $resolutionResultBox = document.querySelector('.js_resalution-result-box')
    let viewportWidth = window.innerWidth
    let resolutionBoxWidth = $resolutionResultBox.offsetWidth
    $resolutionResult.innerHTML = `${viewportWidth} px`
    $resolutionResultBox.innerHTML = `${viewportWidth} px`

    window.addEventListener('resize', () => {
        let $resolutionResult = document.querySelector('.js_resalution-result-self')
        let $resolutionResultBox = document.querySelector('.js_resalution-result-box')
        let viewportWidth = window.innerWidth
        let resolutionBoxWidth = $resolutionResultBox.offsetWidth
        $resolutionResult.innerHTML = `${viewportWidth} px`
        $resolutionResultBox.innerHTML = `${viewportWidth} px`
    })
})

