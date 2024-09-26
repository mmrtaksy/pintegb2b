"use client"
import React, { useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Link } from "@nextui-org/link";

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

const Stories = ({ images = [] }) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    // Eğer görüntüler yüklenmediyse "Yükleniyor" mesajını göster
    if (images.length === 0) {
        return <>Yükleniyor</>
    }

    // Keen Slider Hook
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: false,
        mode: 'free-snap',
        slides: {
            origin: 'center',
            perView: 5,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        breakpoints: {
            '(min-width: 992px)': {
                loop: false,
                slides: {
                    perView: 5,
                },
            },
            '(max-width: 992px)': {
                loop: false,
                slides: {
                    perView: 3,
                },
            },
            '(max-width: 500px)': {
                loop: false,
                slides: {
                    perView: 2,
                },
            },
        },
    })


    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {images.map((item, idx) => (
                        <div className="keen-slider__slide text-center" key={idx}>
                            <Link href="/" key={`Link ${idx}`} className='flex flex-col text-black'>
                                <img src={item.src} alt={`Slide ${idx}`} className='max-w-[100px] mx-auto' />
                                <div className='font-semibold'>{item.title}</div>
                            </Link>
                        </div>
                    ))}
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {/* {loaded && instanceRef.current && (
            <div className="dots mt-5">
                {[
                ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => {
                return (
                    <button
                    key={idx}
                    onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                )
                })}
            </div>
            )} */}
        </>
    )
}



export default Stories
