# HiveOS 分布式蜂巢系统开发清单

## Phase 1: 架构深度论证与标准化 (PLANNING)
- [x] **架构蓝图定稿 (Final Spec)** <!-- id: 0 -->
    - [x] 整合商业闭环与多 Agent 博弈矩阵至 `implementation_plan.md`
    - [x] 绘制 Mermaid 三层架构拓扑
    - [ ] 定义通用适配网关 (Universal Adapter) 接口规范
    - [ ] 定义权限矩阵 (Permission Matrix) 的 Config 结构
- [ ] **通信协议定义** <!-- id: 1 -->
    - [ ] 定义 Hive-Manager <-> Hive-Core 的 mTLS/gRPC 契约
    - [ ] 定义 Sidecar <-> NATS 的事件流 JSON Schema (Audit/Log/Trace)
- [ ] **初始化 Git 仓库与分支策略** <!-- id: 2 -->
    - [x] 确立 `dev` / `main` 双分支模型
    - [x] 推送本地汉化代码至远程 `dev` 分支

## Phase 2: 核心基座开发 (EXECUTION - Backend / Data Plane)
- [ ] **通用 LLM 网关 (Mac Control Plane)** <!-- id: 3 -->
    - [ ] 实现 OpenAI 协议的统一适配层 (OpenAI/DeepSeek/Ollama)
    - [ ] 实现 Secret Guard (密钥混淆与轮询)
- [ ] **Hive-Core (Go) 远程控制服务** <!-- id: 4 -->
    - [ ] 实现基于 mTLS 的 gRPC 服务端
    - [ ] 实现 Docker 容器的原子化拉起与 RBAC 权限注入
- [ ] **Sidecar 注入程序 (Python/Go)** <!-- id: 5 -->
    - [ ] 实现无痕注入 (tmpfs 挂载规则包)
    - [ ] 实现协作记忆同步 (Context Sync) 消费者
- [ ] **数据共识体系** <!-- id: 6 -->
    - [ ] 部署 NATS JetStream + Redis Redlock
    - [ ] 部署 ClickHouse + Vector 日志流水线

## Phase 3: Mac 控制台适配 (EXECUTION - Frontend / Control Plane)
- [ ] **前端架构升级** <!-- id: 7 -->
    - [ ] 重构 `SessionAPI` 对接 Hive-Gateway
    - [ ] 实现 3D 场景下的“死锁红色警报”与“权限矩阵”可视化
- [ ] **策略与模板库** <!-- id: 8 -->
    - [ ] 实现 `Spec-Pack` (需求规格包) 编辑器
    - [ ] 实现 `claude.md` 规则包管理 UI

## Phase 4: 联合调试与交付 (VERIFICATION)
- [ ] **全链路自洽性验证** <!-- id: 9 -->
    - [ ] 验证 "影子仲裁" 回路 (模拟 C/D 冲突)
    - [ ] 验证 "神卫 F" 的拦截机制 (模拟越权操作)
- [ ] **商业化交付打包** <!-- id: 10 -->
    - [ ] 编写《HiveOS 部署与运维白皮书》
    - [ ] 执行 Release v1.0, Tag & Deploy
