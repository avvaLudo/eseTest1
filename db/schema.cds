namespace com.avvale.ld09.acdm2024;

entity Incidenti {
    key ID          : Integer;
        title       : String(100);
        description : String(1000);
        status      : String(20);
        priority    : String(20);
}

entity Persone {
    key pID      : Integer;
        nome    : String(20);
        cognome : String(30);
        incidenti: Association to Incidenti on incidenti.ID=idIncidenti;
        idIncidenti: type of Incidenti:ID;
}

entity Libro {
    key lID : Integer;
    titolo: String ;
    autore: Composition of many Archivio on autore.libro_lID = $self;
    anno: Integer;
    pagine: Integer;     
}

entity Autore{
    key aID: Integer;
    nome: String;
    libro: Composition of  many Archivio on libro.autore_aID = $self;
}

entity Archivio {
    key autore_aID : Association to Autore;
    key libro_lID   : Association to Libro;
    
}


entity Afe {
    key ordernumber  : Integer;
        testoafe     : String(500);
        amount       : Double;
        currency     : String(50);
        fy           : Integer;
        location     : String(100);
        responsabile : String(100);
        chiusura     : String(50);
}