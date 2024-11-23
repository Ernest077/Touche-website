import React, { useState, useEffect } from 'react';
import styles from './SlideShow.module.scss';
import Img from '../../assets/images/cover1.png';
import Img2 from '../../assets/images/Product2Photo/ProductPhoto2.png'

const slides = [Img, Img, Img];

const SlideShow = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    const currentSlide = (n) => setSlideIndex(n);

    const showSlides = (n) => {
        const slidesElements = document.getElementsByClassName(styles.mySlides);
        const dots = document.getElementsByClassName(styles.dot);
        if (n > slidesElements.length) setSlideIndex(1);
        if (n < 1) setSlideIndex(slidesElements.length);
        Array.from(slidesElements).forEach(slide => slide.style.display = 'none');
        Array.from(dots).forEach(dot => dot.className = dot.className.replace(` ${styles.active}`, ''));
        if (slidesElements[slideIndex - 1]) {
            slidesElements[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].className += ` ${styles.active}`;
        }
    };

    return (
        <div className={styles.slideshowContainer}>
            <h1 className={styles.h1Text}>TRES MANERAS DE CONSEGUIR LOS LABIOS MATES</h1>
            {slides.map((slide, index) => (
                <div key={index} className={`${styles.mySlides} ${styles.fade}`}>
                    <img src={slide} style={{ width: '100%' }} alt="Photo" />
                </div>
            ))}
            <div className={styles.spanDiv} style={{ textAlign: 'center', marginTop: '-25px' }}>
                {slides.map((_, index) => (
                    <span key={index} className={styles.dot} onClick={() => currentSlide(index + 1)}></span>
                ))}
            </div>
        </div>
    );
};

export default SlideShow;