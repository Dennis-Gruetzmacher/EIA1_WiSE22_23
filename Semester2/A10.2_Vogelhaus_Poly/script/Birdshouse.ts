/*
Aufgabe: L10.2_Vogelhaus_Poly
Name: Dennis Grützmacher
Matrikel: 271246
Datum: 20.01.2023
Quellen:
*/
namespace L10_2_Vogelhaus_classes
{
    export class Birdshouse
    {
        public drawBase(): void
        {
            crc2.fillStyle = "#802b00";
            crc2.fillRect(-6, 0, 12, -100);
            crc2.translate(0, -135);
            crc2.beginPath();
            crc2.fillStyle = "#331a00";
            crc2.fillRect(-105, -5, 30, 10);
            crc2.fillRect(75, -5, 30, 10);
            crc2.closePath();
            crc2.translate(0, -105);
            crc2.beginPath();
            crc2.moveTo(-100, 0);
            crc2.lineTo(0, -50);
            crc2.lineTo(100, 0);
            crc2.closePath();
            crc2.fillStyle = "#FF0000";
            crc2.fill();
        
        }
        public drawTop(): void
        {
            crc2.beginPath();
            crc2.fillStyle = "#663300";
            crc2.fillRect(-75, -90, 150, -150);
            crc2.closePath();
        }
    }
}    