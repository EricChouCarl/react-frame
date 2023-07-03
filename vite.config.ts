import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode, ssrBuild }) => {
  return{

    plugins: [react()],

    /*项目配置*/
    resolve:{
      alias:{
        '@':resolve(__dirname ,"./src"),
      },
      extensions:['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
    },

    /*css配置*/
    css:{
      modules:{
        /*localsConvention:"camelCase", // 展示处理之后的key,
        scopeBehaviour:'local', // 配置的模块化还是全局还是局部
        generateScopedName:'[name]_[local]_[hash:5]', // 类名生成规则
        globalModulePaths:[] // 不想参与css格式化的文件路径*/
      },
      postcss:{

      },
      preprocessorOptions:{
        sass: {
          javascriptEnabled: true
        }
      },
      /*启用*/
      devSourcemap:true
    },

    /*服务器配置*/
    server:{
      port:5173,
      open:false,
      proxy:{
        '^/api/':{
          target: 'http://127.0.0.1:3001/',
          changeOrigin:true,//允许跨域
          rewrite:(path)=>path.replace(/^\/api/,'')
        }
      }

    }

  }
})


/*export default defineConfig({
  plugins: [react()],
})*/
