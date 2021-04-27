/**
 * @author  sparkHou
 * @date 2021-04-16 01:00
 * @Description:
 */
import Abstract from '@/plugin/axios';
import {GetDemo} from '@/plugin/axios/interface';

interface Common {
  [ket: string]: any
}

class Basic extends Abstract {

  /**
   * get示例
   */
  getDemo(params: GetDemo) {
    return this.req({url: 'Basic.GetDemo', params});
  }

  //项目信息
  getProjectInfo(params: Common={}) {
    return this.req({url: 'Home.getProjectInfo', params});
  }

  //考勤信息
  getAttendanceList(params: Common={}) {
    return this.req({url: 'Home.getAttendanceList', params});
  }
  //征拆信息
  getDemolitionInfo(params: Common={}) {
    return this.req({url: 'Home.getDemolitionInfo', params});
  }
  //重大问题
  getMajorIssuesList(params: Common={}) {
    return this.req({url: 'Home.getMajorIssuesList', params});
  }


}

// 单列模式返回对象
let instance;
export default (() => {
  if (instance) return instance;
  instance = new Basic();
  return instance;
})();
