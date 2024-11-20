package hcmut.hcmut_spss.DTO.RestfulAPI;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChangePasswordDTO {
    private String username;
    private String oldPassword;
    private String newPassword;
}
