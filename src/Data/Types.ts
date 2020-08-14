export module Types{
    export interface IPassingMessage{
        decoderId?: number;
        passingTimeRTC?: number;
        passingTimeUTC?: number;
        signalStrength?: number;
        signalHits?: number;
        transponderId?: number;
        transponderTemperature?: number;
        transponderVoltage?: number;
    }
}