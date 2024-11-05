import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

export const App = () => {
    let state = useSelector(state => state);
    let [choosedWords, setChoosedWords] = useState([]);
    let [randomIndex, setRandomIndex] = useState(-1);

    const start = () => {
        setRandomIndex(Math.floor(Math.random() * choosedWords.length));
    }

    const nextWord = () => {
        if(choosedWords.length !== 1){
            let copyWords = [...choosedWords];
            copyWords.splice(randomIndex, 1);
            setChoosedWords(copyWords);
            setRandomIndex(Math.floor(Math.random() * copyWords.length));
        } else {
            end();
        }
    }

    const end = () => {
        setChoosedWords([]);
        setRandomIndex(-1);
    }

    console.log(choosedWords);

    if(randomIndex === -1){
        return(
            <div className="wrapper app">
                <div className="container">
                    {(choosedWords.length === 0)
                        ? <button className="app__start" disabled>Выберите Пункт</button>
                        : <button className="app__start" onClick={start}>Начать Проверку</button>
                    }
                    <fieldset className="app__options">
                        <legend className="app__title">Учесть: </legend>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="country"
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.country, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.country[0]), state.country.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="country" className="option-app__subinput">Государство</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="ideology" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.ideology, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.ideology[0]), state.ideology.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="ideology" className="option-app__subinput">Идеология</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="internet" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.internet, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.internet[0]), state.internet.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="internet" className="option-app__subinput">Интернет</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="videos" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.videos, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.videos[0]), state.videos.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="videos" className="option-app__subinput">Конспекты из Видео</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="linguistics" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.linguistics, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.linguistics[0]), state.linguistics.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="linguistics" className="option-app__subinput">Лингвистика</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="science" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.science, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.science[0]), state.science.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="science" className="option-app__subinput">Наука</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="common" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.common, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.common[0]), state.common.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="common" className="option-app__subinput">Общее</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="psychology" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.psychology, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.psychology[0]), state.psychology.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="psychology" className="option-app__subinput">Психология</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="religion" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.religion, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.religion[0]), state.religion.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="religion" className="option-app__subinput">Религия</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="sociology" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.sociology, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.sociology[0]), state.sociology.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="sociology" className="option-app__subinput">Социология</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="phylosofy" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.phylosofy, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.phylosofy[0]), state.phylosofy.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="phylosofy" className="option-app__subinput">Философия</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="economy" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.economy, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.economy[0]), state.economy.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="economy" className="option-app__subinput">Экономика</label>
                        </div>
                        <div className="app__option option-app">
                            <input 
                                className="option-app__input" type="checkbox" id="it" 
                                onClick={(e) => {
                                    if(e.target.checked){
                                        setChoosedWords([...state.it, ...choosedWords]);
                                    }else{
                                        let copyWords = [...choosedWords];
                                        copyWords.splice(copyWords.indexOf(state.it[0]), state.it.length)
                                        setChoosedWords(copyWords);
                                    }
                                }}
                            />
                            <label htmlFor="it" className="option-app__subinput">IT</label>
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }
    return(
        <div className="wrapper app _start">
            <div className="container">
                <h1 className="app__word">{choosedWords[randomIndex]}</h1>
                <button className="app__next app__button" type="button" onClick={nextWord}>Next</button>
                <button className="app__stop app__button" type="button" onClick={end}>Stop</button>
            </div>
        </div>
    )
}