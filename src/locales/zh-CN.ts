
export const zhCN = {
    // Station Names
    'station.center': '中央控制',
    'station.bookshelf': '知识库',
    'station.desk': '创作台',
    'station.workbench': '工作台',
    'station.terminal': '终端机',
    'station.scanner': '扫描仪',
    'station.antenna': '通讯塔',
    'station.portal': '传送门',
    'station.taskboard': '任务板',

    // Zone Info Modal & Status
    'zone.status.working': '工作中',
    'zone.status.idle': '空闲',
    'zone.status.waiting': '等待指令',
    'zone.status.offline': '离线',
    'zone.label.directory': '工作目录',
    'zone.label.tmux': 'Tmux 会话',
    'zone.label.created': '创建时间',
    'zone.label.lastActivity': '最后活动',
    'zone.label.currentTool': '当前工具',
    'zone.label.toolsUsed': '工具调用',
    'zone.label.filesTouched': '触碰文件',
    'zone.label.subagents': '子代理',
    'zone.section.stats': '统计数据',
    'zone.section.tokenUsage': 'Token 消耗',
    'zone.section.gitStatus': 'Git 状态',
    'zone.section.identifiers': '标识符',
    'zone.token.current': '当前会话',
    'zone.token.cumulative': '累计消耗',
    'zone.git.notRepo': '非 Git 仓库',
    'zone.git.staged': '已暂存',
    'zone.git.unstaged': '未暂存',
    'zone.git.untracked': '未追踪',
    'zone.git.clean': '工作区干净',
    'zone.git.lines': '行变动',
    'zone.moreFiles': '... 以及另外 ${count} 个文件',

    // Station Panels
    'panel.noActivity': '暂无活动',

    // Feed / Activity
    'feed.thinking': 'Claude 思考中',
    'feed.you': '你',
    'feed.claude': 'Claude',
    'feed.stopped': '已停止',
    'feed.showContent': '▶ 显示内容',
    'feed.hideContent': '▼ 隐藏内容',
    'feed.showMore': '▶ 显示更多',
    'feed.showMoreLink': '... [显示更多 - Alt+E]',
    'feed.pattern': '模式: ',
    'feed.query': '查询: ',

    // Time
    'time.justNow': '刚刚',
    'time.secondsAgo': '秒前',
    'time.minutesAgo': '分钟前',
    'time.hoursAgo': '小时前',
    'time.daysAgo': '天前',

    // General
    'common.close': '关闭',
    'common.cancel': '取消',
    'common.save': '保存',
    'common.loading': '加载中...',
    'common.error': '错误',
    'common.enterToSend': '按 Enter 发送',
    'common.commandPlaceholder': '输入指令...',
    'common.ready': '就绪',

    // Context Menu
    'context.hint.dismiss': '移至它处以关闭',

    // Question Modal
    'question.header.default': '问题',
    'question.header.claude': 'Claude 需要输入',

    // Voice Control
    'voice.listening': '正在聆听...',
    'voice.transcript': '转录:',
    'voice.noSpeech': '未检测到语音',
    'voice.info': 'ℹ️ 信息',
    'voice.error.title': '⚠️ 错误',
    'voice.error.unknown': '未知错误',
    'voice.error.transcription': '转录错误',
    'voice.error.notConfigured': '语音未配置 (缺少 API Key)',
    'voice.error.rateLimit': '速率限制已超出',
    'voice.error.micDenied': '麦克风权限被拒绝',
    'voice.error.notConnected': '未连接到服务器',
    'voice.error.connectionFailed': '语音连接失败',
    'voice.error.timeout': '连接超时',

    // Slash Commands
    'slash.clear.desc': '清除对话历史',
    'slash.compact.desc': '压缩对话以节省上下文',
    'slash.config.desc': '查看/编辑配置',
    'slash.cost.desc': '显示 Token 使用情况和费用',
    'slash.doctor.desc': '运行诊断',
    'slash.help.desc': '显示帮助',
    'slash.init.desc': '初始化 CLAUDE.md',
    'slash.login.desc': '登录 Anthropic',
    'slash.logout.desc': '注销 Anthropic',
    'slash.memory.desc': '编辑 CLAUDE.md 记忆',
    'slash.model.desc': '切换模型',
    'slash.permissions.desc': '查看/编辑权限',
    'slash.prComments.desc': '查看 PR 评论',
    'slash.review.desc': '请求代码审查',
    'slash.status.desc': '显示状态',
    'slash.terminalSetup.desc': '设置终端辅助',
    'slash.vim.desc': '切换 Vim 模式',

    // Keybind Helper (main.ts)
    'helper.workshop': 'Tab: 切换到终端 | 1-6: 聚焦区域 | 0: 总览 | D: 涂装模式',
    'helper.feed': 'Tab: 切换回工作区 | Enter: 发送指令 | /: 命令补齐',
    'helper.draw': '1-6: 选择颜色 | X: 清除涂装 | Esc: 退出涂装',

    // System
    'sys.updateAvailable': '发现新版本',
    'sys.updateAction': '立即更新',
    'sys.connected': '已连接到服务器',
    'sys.disconnected': '与服务器断开连接',

    // Camera Modes
    'mode.focused': '聚焦模式 (Focused)',
    'mode.overview': '总览模式 (Overview)',
    'mode.follow': '跟随模式 (Follow)',
    'mode.desc.none': '无',
    'mode.desc.all': '所有会话',
    'mode.desc.auto': '自动追踪',

    // Dev Panel
    'dev.idle': '待机 (Idle)',
    'dev.working': '工作状态 (Working)',
    'dev.stop': '⏹ 停止 → 待机',

    // Keybind Editor
    'keybind.add': '添加快捷键',
    'keybind.reset': '重置为默认',
    'keybind.pressKey': '请按键...',
    'keybind.action.focus.name': '切换焦点',
    'keybind.action.focus.desc': '在工作区 (3D) 和活动流之间切换',
    'keybind.action.voice.name': '语音输入',
    'keybind.action.voice.desc': '开始/停止语音录制',

    // Version Checker
    'version.required': '要求更新',
    'version.available': '发现新版本',
    'version.unsupported': '你的版本 (${version}) 已不再受支持。',
    'version.newVersion': '发现新版本: ${latest} (当前版本: ${version})',
    'version.releaseNotes': '发行说明',
    'version.dismiss': '关闭',
    'version.copied': '已复制！',

    // Toasts (main.ts)
    'toast.sessionCreated': '会话已创建: ${name}',
    'toast.sessionDeleted': '会话已删除',
    'toast.sessionRestarted': '会话已重启',
    'toast.sessionRestartFailed': '会话重启失败',
    'toast.linkCopied': '链接已复制到剪贴板',
    'toast.settingsSaved': '设置已保存',
    'toast.keybindSaved': '快捷键已保存',
    'toast.recordingStarted': '开始录音',
    'toast.recordingStopped': '录音结束',
    'toast.interruptSent': '已发送中断信号至 ${name}',
    'toast.interruptFailed': '中断失败并待机',
    'toast.connectionError': '连接错误',

    // UI States (main.ts)
    'state.using': '正在使用 ${tool}...',
    'state.complete': '${tool} 完成',
    'state.failed': '${tool} 失败',
    'state.idle': '待机',
    'state.ready': '就绪',
    'state.thinking': '思考中...',
    'state.processing': '正在处理指令...',
    'state.cancelling': '正在取消...',
    'state.cancelled': '已取消！',
};

export type LocaleKey = keyof typeof zhCN;

export function t(key: LocaleKey): string {
    return zhCN[key] || key;
}
