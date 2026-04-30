const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const startInterviewSession = async (role, level, topic) => {
    try {
        const response = await fetch(`${API_BASE_URL}/interview/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role, level, topic }),
        });

        if (!response.ok) {
            throw new Error('Failed to start interview session');
        }

        return await response.json();
    } catch (error) {
        console.error("Backend Error in startInterviewSession:", error);
        throw error;
    }
};

export const getNextQuestion = async (chatHistory, userMessage, role, level, topic) => {
    try {
        const response = await fetch(`${API_BASE_URL}/interview/next`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chatHistory, userMessage, role, level, topic }),
        });

        if (!response.ok) {
            throw new Error('Failed to get next question');
        }

        return await response.json();
    } catch (error) {
        console.error("Backend Error in getNextQuestion:", error);
        throw error;
    }
};
