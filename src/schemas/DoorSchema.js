export default class DoorSchema {
  static schema = {
    name: 'DoorToDoor',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      data: 'date',
      nameTribe: 'string',
      namePerson: 'string',
      address: 'string',
      type: {type: 'string', default: 'LV'},
      age: {type: 'string', default: ''},
      bible: {type: 'string', default: ''},
      evangelical: {type: 'string', default: ''},
      contact: {type: 'string', default: ''},
      frequentsChurch: {type: 'string', default: ''},
      cultHome: {type: 'string', default: ''},
      studyBible: {type: 'string', default: ''},
      studyConfimation: {type: 'string', default: ''},
      prayerRequest: {type: 'string', default: ''},
      reconciled: {type: 'string', default: ''},
      visit: {type: 'string', default: ''},
      acceptChrist: {type: 'string', default: ''},
      note: {type: 'string', default: ''},
    },
  };
}
// 'data','Nome da Tribo','Nome','Endereco','Meio',
// 'Faixa Etaria','Possui biblia','Envangelico',
// 'Contato','Frequenta Igreja','Culto no lar',
// 'Estudo Biblico','Estudo a Confirmar','Pedido de Oracao',
// 'Reconciliou','Visita','Aceita a Cristo','Observacao'
