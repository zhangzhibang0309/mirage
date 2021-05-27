import zhHans from 'vuetify/lib/locale/zh-Hans';

const message = {
  $vuetify: {
    ...zhHans
  },
  name: "简体中文",

  // 通知内容
  axios: {
    request: {
      error: "请求失败",
    },
    response: {
      error: "服务错误",
    },
  },

  auth: {
    login: "登录后可执行此操作",
    denied: "权限不足",
    toolow: {
      teacher: "需要最低老师权限来访问",
      admin: "需要最低管理员权限来访问",
    },
    auth: "权限",
    teacher: "教师",
    admin: "管理员",
  },

  refresh: {
    success: "刷新成功"
  },

  notify: {
    theme: {
      dark: "暗黑模式已开启",
      light: "白天模式已开启"
    },
    lang: {
      change: "语言切换成功"
    }
  },

  // 页面内容
  head: {
    title: "Mirage OJ",
    tab: {
      home: "主页",
      problem: "问题",
      contest: "比赛",
      blog: "博客"
    }
  },

  home: {
    news: "新闻"
  },

  problem: {
    title: "问题列表",
    list: {
      number: "#",
      title: "标题",
      tags: "标签",
      submit: "提交",
      passrate: "通过率"
    },
    author: "作者",
    timelimit: "时间限制",
    memorylimit: "内存限制",
    spj: "特判",
  },

  blog: {
    title: "博客列表",
    list: {
      date: "日期",
      title: "标题",
      tags: "标签",
      author: "作者"
    }
  },

  contest: {
    title: "比赛列表",
    list: {
      title: "名称",
      tags: "标签",
      start: "开始时间",
      end: "结束时间",
      last: "持续时间",
      mode: {
        name: "参加模式",
        public: "公开比赛",
        private: "私有比赛"
      }
    }
  },

  login: {
    title: "登录",
    subtitle: "别来无恙。",
    button: "登录",
  },
  register: {
    title: "注册",
    subtitle: "喜欢您来。",
    button: "注册",
  },

  form: {
    username: "用户名",
    password: "密码",
    school: "学校",
    class: "班级",
    avatar: "头像",
    id: "学号",
    email: "电子邮箱",
    verify: "验证码",
    term: "请阅读并同意用户协议",
  },

  verify: {
    required: " 不能为空",
    stringMin: " 至少 {min} 字符",
    numberMin: " 必须大于 {min}",
    stringMax: " 至多 {max} 字符",
    numberMax: " 必须小于 {max}",
    email: "请输入格式正确的邮箱地址",
  }
}

const time = {
  short: {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  },
  long: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  },
  blog: {
    month: 'short',
    day: 'numeric'
  }
}

export {
  message,
  time
}