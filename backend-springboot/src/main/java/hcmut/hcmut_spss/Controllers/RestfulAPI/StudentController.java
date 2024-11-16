package hcmut.hcmut_spss.Controllers.RestfulAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hcmut.hcmut_spss.DTO.ChangePasswordDTO;
import hcmut.hcmut_spss.DTO.LogStudentDTO;
import hcmut.hcmut_spss.DTO.PrinterDTO;
import hcmut.hcmut_spss.DTO.ResponseObject;
import hcmut.hcmut_spss.DTO.StudentDTO;
import hcmut.hcmut_spss.DTO.UpdateStudentDTO;
import hcmut.hcmut_spss.Services.RestfulAPI.StudentService;

@RestController
@RequestMapping("/api/v1/Student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/getStudentInforById/{studentId}")
    public ResponseEntity<ResponseObject> getStudentInforById(@PathVariable String studentId) {
        return studentService.FNC_getStudentInforById(studentId);
    }

    @GetMapping("/getAllStudentInfor")
    public ResponseEntity<ResponseObject> getAllStudentInfor() {
        return studentService.FNC_getAllStudentInfor();
    }

    @PutMapping("/addStudent")
    public ResponseEntity<ResponseObject> addStudent(@RequestBody StudentDTO studentDTO){
        return studentService.PROC_addStudent(studentDTO);
    }

    @PutMapping("/deleteStudent/{studentId}")
    public ResponseEntity<ResponseObject> deleteStudent(@PathVariable String studentId){
        return studentService.PROC_deleteStudent(studentId);
    }

    @PutMapping("/updateStudent")
    public ResponseEntity<ResponseObject> updateStudent(@RequestBody UpdateStudentDTO updateStudentDTO){
        return studentService.PROC_updateStudent(updateStudentDTO);
    }

    @PutMapping("/changeStudentPassword")
    public ResponseEntity<ResponseObject> changeStudentPassword(@RequestBody ChangePasswordDTO changePasswordDTO){
        return studentService.PROC_changeStudentPassword(changePasswordDTO);
    }
    
    @GetMapping("/getNumberPageDefaultRemain/{studentId}")
    public ResponseEntity<ResponseObject> getNumberPageDefaultRemain(@PathVariable String studentId) {
        return studentService.FNC_getNumberPageDefaultRemain(studentId);
    }

    @GetMapping("/getNumberPageWasPrinted/{uname}")
    public ResponseEntity<ResponseObject> getNumberPageWasPrinted(@PathVariable String uname) {
        return studentService.FNC_getNumberPageWasPrinted(uname);
    }

    
    @GetMapping("/getLogStudent/{studentId}")
    public ResponseEntity<ResponseObject> getLogStudent(
        @PathVariable String studentId, 
        @RequestBody LogStudentDTO logStudentDTO) {

        return studentService.FNC_getLogStudent(studentId, logStudentDTO);
    }

    @GetMapping("/getLogAllStudent")
    public ResponseEntity<ResponseObject> getLogAllStudent(@RequestBody LogStudentDTO logStudentDTO) {
        return studentService.FNC_getLogAllStudent(logStudentDTO);
    }
}
