import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

const Context = createContext({ currentQuestionData: {}, scoreData: {}, timer: {} });

export const Provider = ({ children }) => {
    const [currentQuestionData, setCurrentQuestionData] = useState(0);
    const [scoreData, setScoreData] = useState(0);
    const [timer, setTimer] = useState(600);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageCurrentQuestionData = await AsyncStorage.setItem('@RN:currentQuestionData', JSON.stringify(currentQuestionData));
            const storageScoreData = await AsyncStorage.setItem('@RN:scoreData', JSON.stringify(scoreData));
            const storageTimer = await AsyncStorage.setItem('@RN:timer', JSON.stringify(timer));

            if (storageCurrentQuestionData && storageScoreData && storageTimer) {
                setCurrentQuestionData(JSON.parse(storageCurrentQuestionData));
                setScoreData(JSON.parse(storageScoreData));
                setTimer(JSON.parse(storageTimer));
                setLoading(false);
            } else if (!storageCurrentQuestionData && !storageScoreData && !storageTimer) {
                setLoading(false);
            }
        }
        loadStorageData();
    }, []);

    async function setData(currentQuestionData, scoreData) {
        setCurrentQuestionData(currentQuestionData);
        setScoreData(scoreData);
        await AsyncStorage.setItem('@RN:currentQuestionData', JSON.stringify(currentQuestionData));
        await AsyncStorage.setItem('@RN:scoreData', JSON.stringify(scoreData));
    }

    async function setTimerData(timer) {
        setTimer(timer);
        await AsyncStorage.setItem('@RN:timer', JSON.stringify(timer));
    }

    function clsData() {
        AsyncStorage.clear().then(() => {
            setCurrentQuestionData(0);
            setScoreData(0);
            setTimer(600);
        });
    }

    return (
        <Context.Provider value={{ currentQuestionData, scoreData, timer, setData, setTimerData, clsData, loading }} >
            {children}
        </Context.Provider>
    );
}

export default Context;