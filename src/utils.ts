export function convertTime(totalSeconds: number) {
    if (totalSeconds === 0) {
        return "0:00";
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds > 9? seconds : "0" + seconds}`
}
