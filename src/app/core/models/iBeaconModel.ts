/**
 * * MODELO iBEACON
 */
export interface BeaconInfo {
    identifier: string;
    uuid: string;
    major?: number;
    minor?: number;
}

/**
 * * GRADA (major)
 * ! POPULAR  -> 1
 * ! HERRADURA -> 2
 * ! SAN SEBASTIÁN -> 3
 * ! TRIBUNA -> 4
 */


/**
 * * TIPO (minor)
 * ! FOOD -> 1
 * ! CONCURSOS Y SORTEOS -> 2
 * ! ENCUESTAS -> 3
 * ! OFERTAS -> 4
 * ! NOTIFICACIONES -> 5
 * ! ? -> 6
 */


/**
 * - name -> comida, oferta,etc
 * - uuid -> ÚNICO
 * - major -> grada
 * - minor -> tipo(food, eat)
 */

