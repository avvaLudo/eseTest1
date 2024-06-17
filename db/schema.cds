namespace com.avvale.ld09.acdm2024;

entity Incidenti {
    key ID          : Integer;
        title       : String(100);
        description : String(1000);
        status      : String(20);
        priority    : String(20);
}

entity Persone {
    key ID      : Integer;
        nome    : String(20);
        cognome : String(30);
}

