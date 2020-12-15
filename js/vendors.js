var density = 50,
    speed = 0.3,
    winHeight = window.innerHeight,
    winWidth = window.innerWidth,
    start = {
        yMin: -600,
        yMax: 600,
        xMin: 0,
        xMax: 1920,
        scaleMin: 0.7,
        scaleMax: 0.95,
        scaleXMin: 1.2,
        scaleXMax: 2,
        scaleYMin: 1.2,
        scaleYMax: 2,
        opacityMin: 0.1,
        opacityMax: 0.4
    },
    mid = {
        yMin: winHeight * 0.4,
        yMax: winHeight * 0.9,
        xMin: winWidth * 0.1,
        xMax: winWidth * 0.9,
        scaleMin: 1,
        scaleMax: 1.8,
        opacityMin: 0.5,
        opacityMax: 1
    },
    end = {
        yMin: -180,
        yMax: -180,
        xMin: -100,
        xMax: winWidth + 180,
        scaleMin: 0.1,
        scaleMax: 1,
        opacityMin: 0.4,
        opacityMax: 0.7
    };

function range(map, prop) {
    var min = map[prop + 'Min'],
        max = map[prop + 'Max'];
    return min + (max - min) * Math.random();
}

function sign() {
    return Math.random() < 0.5 ? -1 : 1;
}

function randomEase(easeThis, easeThat) {
    if (Math.random() < 0.5) {
        return easeThat;
    }
    return easeThis;
}

function spawn(particle) {
    var wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4),
        delay = wholeDuration * Math.random(),
        partialDuration = (wholeDuration + 1) * (0.2 + Math.random() * 0.3);
    TweenLite.set(particle, {
        y: range(start, 'y'),
        x: range(start, 'x'),
        scaleX: range(start, 'scaleX'),
        scaleY: range(start, 'scaleY'),
        scale: range(start, 'scale'),
        opacity: range(start, 'opacity'),
        visibility: 'hidden'
    });
    // Moving upward
    TweenLite.to(particle, partialDuration, {
        delay: delay,
        y: range(mid, 'y'),
        ease: randomEase(Linear.easeOut, Back.easeInOut)
    });
    TweenLite.to(particle, wholeDuration - partialDuration, {
        delay: partialDuration + delay,
        y: range(end, 'y'),
        ease: Back.easeIn
    });
    //Moving on axis X
    TweenLite.to(particle, partialDuration, {
        delay: delay,
        x: range(mid, 'x'),
        ease: Power1.easeOut
    });
    TweenLite.to(particle, wholeDuration - partialDuration, {
        delay: partialDuration + delay,
        x: range(end, 'x'),
        ease: Power1.easeIn
    });
    //opacity and scale
    partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
    TweenLite.to(particle, partialDuration, {
        delay: delay,
        scale: range(mid, 'scale'),
        autoAlpha: range(mid, 'opacity'),
        ease: Linear.easeNone
    });
    TweenLite.to(particle, wholeDuration - partialDuration, {
        delay: partialDuration + delay,
        scale: range(end, 'scale'),
        autoAlpha: range(end, 'opacity'),
        ease: Linear.easeNone,
        onComplete: spawn,
        onCompleteParams: [particle]
    });
}


function createParticle() {
    var i, particleSpark;
    for (i = 0; i < density; i += 1) {
        particleSpark = document.createElement('div');
        particleSpark.classList.add('spark');
        document.getElementById("fire").appendChild(particleSpark);
        spawn(particleSpark);
    }
}


// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());