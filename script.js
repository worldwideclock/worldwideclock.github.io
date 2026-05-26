function runClock() {
    const now = new Date();

    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();

    // Calculate rotation
    const sDeg = s * 6;             // 6 degrees per second
    const mDeg = m * 6 + (s / 10);  // Adds a tiny move as seconds pass
    const hDeg = (h % 12) * 30 + (m / 2); // Adds a tiny move as minutes pass

    // Apply rotation
    document.getElementById('sec').style.transform = `rotate(${sDeg}deg)`;
    document.getElementById('min').style.transform = `rotate(${mDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hDeg}deg)`;
}

setInterval(runClock, 1000);
runClock(); // Start immediately
