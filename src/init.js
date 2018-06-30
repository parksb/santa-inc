import $ from 'jquery';

class init {
  getJsonData(path) {
    const data = JSON.parse($.ajax({
      url: path,
      dataType: 'JSON',
      async: false
    }).responseText);

    return data;
  }

  getPolicyData() {
    const policyJson = this.getJsonData('/data/policy.json');
    const policies = [];

    for (let i = 0; i < policyJson.length; i += 1) {
      policies[i] = {
        id: policyJson[i].id,
        cost: policyJson[i].cost
      };
    }

    return policies;
  }

  getWorkerData() {

  }
}

export default init;
