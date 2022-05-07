import styled from "styled-components"
import React, {useRef, useState, useLayoutEffect } from "react";

export const Episode = ({item}) => {
    const [isVisible, setIsVisible] = useState(false)
    const myRef = useRef()

    useLayoutEffect(() => {
        const appearOptions = {
            threshold: 1,
            rootMargin: "0px 0px 200px 0px"
        }
        const appearOnScroll = new IntersectionObserver(([entry], appearOnScroll)=>{
            if(entry.isIntersecting){
                setIsVisible(true)
                appearOnScroll.unobserve(entry.target)
            }
        }, appearOptions);
        
        const onScroll = () =>{
            appearOnScroll.observe(myRef.current)
        }

        window.addEventListener("scroll", onScroll);
        return () => {

        };
    }, [])

    return(
        <EpisodeComponent ref={myRef} isVisible={isVisible} >
            <Image src={item.src} />
            <div>{item.name}</div>
        </EpisodeComponent>
    )
}

export const EpisodesWrapper = styled.div`
    margin-top: 20rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const EpisodeComponent = styled.div`
    width: 250px;
    height: 250px;
    margin: 20px;
    position: relative;
    color: white;
    transform: translateY(${({ isVisible }) => (isVisible ? "0" : "10rem")});
    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
    cursor: pointer;
    transition: transform 1s, opacity 1s;

    div{
        width:100%;
        height:100%;
        font-size: 3rem;
        display:flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s linear;
    }

    &:hover{
        div{
            opacity: 1;
        }
        img{
            filter: brightness(50%);
        }
    }
`

export const Image = styled.img`
    max-width:100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(100%);
    transition: filter 0.3s linear;
`