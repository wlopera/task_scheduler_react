# task_scheduler_react
Procesamiento de ordenes a través de tareas encadenadas - frontend React

- Debe estar arriba el backend: (publicado en vercel)
  https://github.com/wlopera/task-scheduler-python
***
<div>
      <h1>PROCESAMIENTO TAREAS: PYTHON-REACT</h1>
      <br />
      <p>
        TaskScheduler es una solución de programación de código abierto para
        la automatización de procesos a nivel empresarial.
      </p>
      <p>
        TaskScheduler se utiliza para iniciar archivos ejecutables en Python
        proporciona tareas secuenciales y cadenas de trabajo.
      </p>
      <p>
        TaskScheduler cuenta con librerias parametrizables para copiar archivos
        FTP y SFTP y envio de correos.
      </p>
      <p>
        Se pueden agregar librerías Python personalisadas que permitan agregar
        tareas requeridas.
      </p>
      <br />
      <h5 style={{ backgroundColor: "#76ed6b" }}>{tab} Tareas</h5>
      <p>
        Modo de operación Jobs: Son la unidad básica para el procesamiento de
        archivos ejecutables.
      </p>
      <p>Se pueden ejecutar independientemente uno del otro.</p>
      <p>
        Dependiendo del resultado de la ejecución, es decir, código de salida
        que indica éxito, falla o un código de salida específico, se puede
        iniciar cualquier número de trabajos sucesivos.
      </p>
      <br />
      <h5 style={{ backgroundColor: "#76ed6b" }}>{tab} Cadenas de trabajo</h5>
      <p>
        Las cadenas de trabajo se pueden ver como una línea de ensamblaje en la
        que se pasan varios nodos de trabajo.
      </p>
      <p>
        Por lo tanto, cada trabajo comprende exactamente un paso en el
        procesamiento de una cadena de trabajo.
      </p>
      <p>
        Las dependencias de trabajo basadas en los resultados de ejecución de
        los nodos de trabajo respectivos se pueden configurar para una cadena de
        trabajo.
      </p>
      <p>
        Los trabajos ejecutan transferencias de archivos basadas en las
        capacidades incorporadas de FTP y SFTP como un medio generalizado para
        integrar aplicaciones.
      </p>
      <p>
        Los inicios de trabajo se activan mediante el calendario incorporado, la
        línea de comandos o la interfaz web.
      </p>
      <p>
        Otras aplicaciones pueden iniciar trabajos o controlar TaskScheduler a
        través de archivos python.
      </p>
      <p>
        Se pueden ver como una línea de ensamblaje en la que se pasan varios
        nodos de trabajo, y cada trabajo constituye un paso en el procesamiento
        de una cadena.
      </p>
      <p>
        Permiten la reutilización de trabajos en diferentes cadenas de trabajo
        con diferentes conjuntos de parámetros.
      </p>
      <p>
        Permiten mapear dependencias, por ejemplo, haciendo que el procesamiento
        continúe en diferentes nodos de trabajo de acuerdo con el resultado
        devuelto del procesamiento de un nodo de trabajo.
      </p>
      <br />
      <h5 style={{ backgroundColor: "#76ed6b" }}>{tab} Ordenes</h5>
      <p>Son desencadenantes que harán que se inicie una cadena de trabajo.</p>
      <p>
        Los trabajos pueden iniciarse por eventos de calendario, eventos de
        archivo y por eventos creados mediante programación. Se pueden usar con
        parámetros que permiten usar la misma cadena de trabajo con diferentes
        conjuntos de parámetros.
      </p>
      <p>Los flujos de trabajo están regulados por órdenes.</p>
      <p>
        Una orden puede considerarse como una directiva que se procesa en una
        cadena de trabajos.
      </p>
      <p>
        Se asigna un pedido a una cadena de trabajo con un identificador que es
        válido para esa cadena de trabajo en particular.
      </p>
      <p>
        El pedido también tiene un estado que cambia después del procesamiento
        de cada nodo de trabajo y puede tener una carga útil de parámetros. Se
        almacenan de forma persistente durante el procesamiento.
      </p>
      <br />
      <h4>2023 ©wlopera</h4>
    </div>
***


### Inicio del programa
![inicio](https://github.com/wlopera/task_scheduler_react/assets/7141537/45801198-b556-424f-956f-e155beca8d62)

### Ordenes
![add-order-1](https://github.com/wlopera/task_scheduler_react/assets/7141537/9948e913-58ed-4cdd-86b7-72030a21392c)

#### Agregar Orden
![add-1-orden](https://github.com/wlopera/task_scheduler_react/assets/7141537/eedd7cd7-094c-4e25-9ca3-a8685d072bb7)
![22](https://github.com/wlopera/task_scheduler_react/assets/7141537/8683e9fa-9678-42db-94ca-4e702024fb08)

#### Modificar Orden
![add-order-2](https://github.com/wlopera/task_scheduler_react/assets/7141537/80dc982a-77d7-4730-b829-c6dfb5e7be8f)

### Tareas
![add-tarea-1](https://github.com/wlopera/task_scheduler_react/assets/7141537/6181c84d-b098-4776-8de5-624503d11701)
![add-tarea-2](https://github.com/wlopera/task_scheduler_react/assets/7141537/4f3ce3e0-8031-4034-9e91-0216478e572c)

### Cadenas de Tarea
![cadena-tarea-1](https://github.com/wlopera/task_scheduler_react/assets/7141537/6b2529f5-2ee0-4efe-a93e-b578ecf29f7e)
![cadena-tarea-2](https://github.com/wlopera/task_scheduler_react/assets/7141537/20518171-84b6-4473-8a62-0e415c1bdf98)

### Agregar datos de la tarea o servicio a ejecutarse
 - Posición: Orden de ejecución de la cadena-
 - Paquete: Nombre del paquete que contiene el servicio a ejcutar
 - Clase: Nombre d ela clase que se ejecuta dentro del paquete seleccionado
 - Siguiente: Próxima tarea en ejecutarse
 - Error: Tarea o fonal del procesamiento
 - 
![cadena-tarea-2-modificar](https://github.com/wlopera/task_scheduler_react/assets/7141537/d2648da5-3747-49ff-8003-160a3423243b)

### Parámetros de la tarea
 - Clave: Nombre del paremtro
 - Valor: Valor del parámetro
   
![cadena-tarea-2-parametros](https://github.com/wlopera/task_scheduler_react/assets/7141537/f9b2aec6-9cab-4d4e-9798-d241bdf3f3f2)

### Procesar Ordenes
![procesar-1](https://github.com/wlopera/task_scheduler_react/assets/7141537/6bc6c5ea-ee69-45e3-8429-d2156cb44220)
![procesar-historico](https://github.com/wlopera/task_scheduler_react/assets/7141537/1f8507e4-e8ae-4d0f-ba79-e46c14a9340b)

#### Mostrar detalles de la tarea ejecutada - logs 
![procesar-historico-2](https://github.com/wlopera/task_scheduler_react/assets/7141537/c6048ddb-3c31-4c53-a447-07da2ab3d38f)
![procesar-historico-3](https://github.com/wlopera/task_scheduler_react/assets/7141537/928d4063-3067-4625-986a-71db57ef9524)

### Descargar Log
![procesar-historico-descarga1](https://github.com/wlopera/task_scheduler_react/assets/7141537/45497090-655d-4b71-badf-d1f56a98c65e)
![procesar-historico-descarga2](https://github.com/wlopera/task_scheduler_react/assets/7141537/dad15667-b2d3-4528-8e05-2cd7b9102793)

### Borrar registros de MongoDB - Depurar
![depurar mongoDB](https://github.com/wlopera/task_scheduler_react/assets/7141537/d38ac18b-ce18-4374-8c6c-8a47f903363c)

### Publicar en netlify:
      - Subir la ultima versión al repo de github (master)
      - Publicar en cuenta cetlify importando y deploy de la versión de github


### Uso JWT para generar token y conectarse como administrador - poder eliminar registros Logs e Histórico de MongoDB.
![Captura1](https://github.com/wlopera/task_scheduler_react/assets/7141537/42ebe084-d322-4d6b-b2b4-736e8deb3dfb)
![Captura2](https://github.com/wlopera/task_scheduler_react/assets/7141537/2a2e7a84-7a0a-476a-99a2-7a9fb0816c22)

![Captura3](https://github.com/wlopera/task_scheduler_react/assets/7141537/7e5d74d7-9eb9-4afa-b769-b124f5a1a143)

##### Se generar un token - enviar token en servicio de borrar Logs e Históricos de MongoDB (middleware)
![Captura4](https://github.com/wlopera/task_scheduler_react/assets/7141537/da27cd69-0e90-4c4f-bfe8-02650b7adb05)

##### Se envia password encriptado al Backend y este retorna un token o respuesta con información Ok o Error
![Captura5](https://github.com/wlopera/task_scheduler_react/assets/7141537/10d9be19-3ea7-461a-8729-083821479591)
![Captura6](https://github.com/wlopera/task_scheduler_react/assets/7141537/10980f17-8272-4e9b-b057-ef4edf7d9bac)
![Captura7](https://github.com/wlopera/task_scheduler_react/assets/7141537/992705c2-faf1-402e-98de-a893a6a986b1)





### Demo:
https://cute-kulfi-b4cf4e.netlify.app



