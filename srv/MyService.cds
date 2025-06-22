using { nabyendu.db as nabyendu } from '../db/datamodel';

@path: '/sap/opu/odata/sap/API_SALES_ORDER'
service MyService {

    entity OrderSet as projection on nabyendu.orders;

}