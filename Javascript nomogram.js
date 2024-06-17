document.getElementById('nomogramForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const hostileAbdomenIndex = parseInt(document.getElementById('hostileAbdomenIndex').value);
    const prostateVolume = parseInt(document.getElementById('prostateVolume').value);
    const nccnRiskCategory = document.getElementById('nccnRiskCategory').value;

    let totalPoints = 0;

    // Calculate points for Hostile Abdomen Index
    const hostileAbdomenPoints = (hostileAbdomenIndex - 1) * 20; // Example calculation
    totalPoints += hostileAbdomenPoints;

    // Calculate points for Prostate Volume
    let prostateVolumePoints = 0;
    if (prostateVolume >= 260) {
        prostateVolumePoints = 0;
    } else if (prostateVolume >= 240) {
        prostateVolumePoints = 10;
    } else if (prostateVolume >= 220) {
        prostateVolumePoints = 20;
    } else if (prostateVolume >= 200) {
        prostateVolumePoints = 30;
    } else if (prostateVolume >= 180) {
        prostateVolumePoints = 40;
    } else if (prostateVolume >= 160) {
        prostateVolumePoints = 50;
    } else if (prostateVolume >= 140) {
        prostateVolumePoints = 60;
    } else if (prostateVolume >= 120) {
        prostateVolumePoints = 70;
    } else if (prostateVolume >= 100) {
        prostateVolumePoints = 80;
    } else {
        prostateVolumePoints = 90;
    }
    totalPoints += prostateVolumePoints;

    // Calculate points for NCCN Risk Categories
    let nccnRiskPoints = 0;
    switch (nccnRiskCategory) {
        case 'veryLowRisk':
            nccnRiskPoints = 100;
            break;
        case 'lowRisk':
            nccnRiskPoints = 80;
            break;
        case 'intermediateRisk':
            nccnRiskPoints = 60;
            break;
        case 'highRisk':
            nccnRiskPoints = 40;
            break;
        case 'veryHighRisk':
            nccnRiskPoints = 20;
            break;
    }
    totalPoints += nccnRiskPoints;

    // Determine likelihood of SP-RARP
    const likelihood = totalPoints > 120 ? 'High likelihood of SP-RARP' : 'Low likelihood of SP-RARP';

    // Display the result
    document.getElementById('result').textContent = 'Result: ' + likelihood + ' (Total Points: ' + totalPoints + ')';
});
