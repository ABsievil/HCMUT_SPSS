package hcmut.hcmut_spss.Controllers.RestfulAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hcmut.hcmut_spss.DTO.ResponseObject;
import hcmut.hcmut_spss.Services.RestfulAPI.StudentService;

@RestController
@RequestMapping("/api/v1/Student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/getLogStudent/{studentId}")
    public ResponseEntity<ResponseObject> getLogStudent(@PathVariable String studentId) {
        return studentService.FNC_getLogStudent(studentId);
    }

    @GetMapping("/getLogAllStudent")
    public ResponseEntity<ResponseObject> getLogAllStudent() {
        return studentService.FNC_getLogAllStudent();
    }
}
